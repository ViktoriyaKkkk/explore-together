import React, { useEffect, useMemo, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { IoLogoOctocat } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { TbCat } from 'react-icons/tb'
import { IoClose, IoSendSharp } from 'react-icons/io5'
import { useAppContext } from '../context/AppContext'
import { clsx } from 'clsx'
import { useMessages } from '../utils/useMessages'
import { createMessages, readMessages } from '../api/api.message'
import { HiUserGroup } from 'react-icons/hi'
import { useSearch } from '../utils/useSearch'
import { useUsers } from '../utils/useUsers'
import ReadModal from '../components/ReadModal'
import ModalLayout from '../components/ModalLayout'
import { createReports } from '../api/api.report'
import { useValidation } from '../utils/useValidation'
import Profile from '../components/Profile'

const Dialogs = observer(() => {
	const { userStore, AdminInstance } = useAppContext()
	useEffect(() => {
		if (Object.keys(userStore._user).length === 0) {
			navigate('/')
		}
	})
	let { id } = useParams()
	const [searches, err, load] = useSearch()

	const chats = useMemo(() => searches?.filter(search => {
		let res = false
		search.owner === userStore._user.id ? res = true : search.participants.forEach((item) => {
			if (item === userStore._user.id) {
				res = true
			}
		})
		return res
	}), [searches, userStore])

	useMemo(() => {
		if (typeof id === 'undefined' && typeof chats !== 'undefined' && chats.length !==0) {
			id = chats[0]._id
		}
	}, [chats])

	const navigate = useNavigate()
	if (id != null && id !== 'undefined') {
		useMessages(id)
		userStore.socket.emit('join_room', id)
	}

	// useEffect(async ()=> {
	// 	const messages = await readMessages(id)
	// 	if (messages) {
	// 		userStore.setChat(messages)
	// 		console.log(messages)
	// 	}
	// },[])


	const [currMessage, setCurrMessage] = useState('')

	const sendMessage = async () => {
		if (currMessage !== '') {
			const messageData = {
				searchId: id,
				author: userStore.user.id,
				message: currMessage,
				time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
			}
			userStore.setChat([...userStore.chat, messageData])
			await createMessages(messageData.searchId, messageData.author, messageData.message, messageData.time)
			await userStore.socket.emit('send_message', messageData)
		}
	}

	useEffect(() => {
		userStore.socket.on('receive_message', (data) => {
			userStore.setChat([...userStore.chat, data])
		})
	}, [userStore.socket])

	const messagesEndRef = useRef(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	} )

	// const [searches, err, load] = useSearch()
	//
	// const chats = useMemo(() => searches?.filter(search => {
	// 	let res = false
	// 	search.owner === userStore._user.id ? res = true : search.participants.forEach((item) => {
	// 		if (item === userStore._user.id) {
	// 			res = true
	// 		}
	// 	})
	// 	return res
	// }), [searches, userStore])

	const [selectedChat, setSelectedChat] = useState({})
	useEffect(() => {
		if (typeof id !== 'undefined' && typeof chats!== 'undefined' && chats !== []) {
			setSelectedChat(chats?.find(search => {
				return search._id === id
			}))
		}
	}, [chats, id])

	const [users, error] = useUsers()
	const usersById = useMemo(() => {
		return users?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr }
		}, {})
	}, [users])

	const [reportText, setReportText] = useState('')
	const [reportErr, validateReport] = useValidation(reportText, {isEmpty: true})
	const [bluredReport, setBluredReport] = useState(false)

	if (typeof selectedChat === 'undefined' || typeof id === 'undefined' || Object.keys(usersById).length === 0 || chats === [] ||
		typeof chats === 'undefined') {
		return <Layout>
			<div className='absolute w-full -z-20 h-full bg-black'>
			</div>
			<div
				className="absolute w-full -z-10 h-full [mask-image:linear-gradient(0deg,black,transparent)] bg-repeat bg-[url('../../public/img/bggrid2.svg')] ">
			</div>
		</Layout>
	}

	return (
		<Layout>
			{
				userStore.isProfile && <Profile />
			}
			{Object.keys(userStore.isReading).length !== 0 &&
				<ReadModal btn={'Пожаловаться на пользователя'} dis={false} func={() => {
					console.log(`Вы пожаловались на ${userStore.isReading.name}`)
					AdminInstance.setIsModal(!AdminInstance.isModal)
					// userStore.setIsReading('')
				}}>
					<div className='relative flex items-start text-center justify-center p-4 border-b rounded-t border-gray'>
						<h3 className='text-xl mr-7 font-semibold text-white place-self-center'>
							Пользователь {userStore.isReading.name}
						</h3>
						<button type='button' onClick={() => {
							userStore.setIsReading({})
						}}
										className='absolute right-4 top-3 text-white bg-transparent hover:bg-gray hover:text-dark-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
										data-modal-hide='staticModal'>

							<IconContext.Provider value={{ size: '2em' }}><IoClose /></IconContext.Provider>
						</button>
					</div>
					<div className='px-6 py-4 space-y-2 text-white'>
						<p className='text-xl font-semibold'>Имя: {userStore.isReading.name}</p>
						<p className='text-xl font-semibold'>Пол: {userStore.isReading.gender}</p>
						<p className='text-xl font-semibold'>Социальная
							сеть: {userStore.isReading.socialNetwork}</p>
						<p className='text-xl font-semibold'>Информация: {userStore.isReading.info ? userStore.isReading.info : '-'}</p>
					</div>

				</ReadModal>}

			{/*Окно жалобы*/}

			<ModalLayout admin={false} func={() => {
				createReports(userStore.user.id, userStore.isReading._id, reportText).then(r => console.log(r))
				alert(`Вы пожаловались на пользователя ${userStore.isReading.name}`)
			}}>
				<div className='relative flex items-start justify-center p-4 border-b border-gray rounded-t'>
					<h3 className='text-xl mr-7 font-semibold text-white place-self-center'>
						Жалоба на пользователя {userStore.isReading.name}
					</h3>
					<button type='button' onClick={() => {
						AdminInstance.setIsModal(!AdminInstance._isModal)
					}}
									className='absolute right-4 top-3 text-white bg-transparent hover:bg-gray hover:text-dark-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
									data-modal-hide='staticModal'>
						<IconContext.Provider value={{ size: '2em' }}><IoClose /></IconContext.Provider>
					</button>
				</div>

				<div className='p-8 space-y-3'>
					<label htmlFor='report' className='inline text-xl font-semibold text-white'>Опишите вашу
						жалобу: </label>
					<textarea cols='40' rows='3' id='report' name='report' placeholder='Введите текст жалобы'
										autoComplete='report'
										value={reportText} onChange={e => setReportText(e.target.value)}
										onBlur={e => {
											setBluredReport(true)
											validateReport()
										}}
										className='block w-full px-4 py-2 text-gray bg-black font-semibold
								border border-gray rounded-md focus:border-dark-green focus:outline-none focus:ring-2 focus:ring-light-green'
										required />
					{
						reportErr && bluredReport && <p className='fixed bottom-24 text-red'>{reportErr}</p>
					}
				</div>
			</ModalLayout>

			<div className='absolute w-full -z-20 h-full bg-black'>
			</div>
			<div
				className="absolute w-full -z-10 h-full [mask-image:linear-gradient(0deg,black,transparent)] bg-repeat bg-[url('../../public/img/bggrid2.svg')] ">
			</div>
			<div className='fixed bottom-0 w-full -z-40 h-full bg-black'>
			</div>
			<div
				className="fixed bottom-0 w-full -z-30 h-full [mask-image:linear-gradient(0deg,transparent,black)] bg-repeat bg-[url('../../public/img/bggrid2.svg')] ">
			</div>

			<div className='absolute w-full -z-20 h-full bg-black'>
			</div>
			<div
				className="absolute w-full -z-10 h-full [mask-image:linear-gradient(0deg,black,transparent)] bg-repeat bg-[url('../../public/img/bggrid2.svg')] ">
			</div>
			<div className='flex flex-wrap h-screen place-content-center justify-items-center pt-10'>
				<div className='container h-full w-full flex flex-wrap items-center place-content-center shadow-lg rounded-lg'>

					{/*Chatting*/}
					<div className='flex h-2/3 w-full lg:w-2/3 rounded-lg bg-black shadow shadow-md drop-shadow-[0_0_35px_rgba(64,147,107,0.9)]'>
						{/*chat list*/}
						<div className='grid grid-cols-1 place-content-start min-w-fit border-r-2 border-gray overflow-y-auto'>
							{/*<div className='border-b-2 border-gray py-4 px-2'>*/}
							{/*	<input*/}
							{/*		type='text'*/}
							{/*		placeholder='search chatting'*/}
							{/*		className='py-2 px-2 border-2 border-gray rounded-2xl w-full'*/}
							{/*	/>*/}
							{/*</div>*/}

							{ chats &&
								chats?.map((chat) => {
									return <button key={chat._id} onClick={() => {
										navigate(`/dialogs/${chat._id}`)
									}}
																 className={clsx('h-16 flex flex-row justify-items-start w-full py-2 pl-5 pr-3 items-center',
																	 id === chat._id ? 'border-b-2 border-l-4 border-dark-green' : 'border-b border-gray')}>
										<div className='w-1/4 text-white'>
											<IconContext.Provider value={{ size: '2em', color: 'white' }}>
												<HiUserGroup />
											</IconContext.Provider>
										</div>
										<div className='w-fit'>
											<p className='ml-2 text-white text-start'>{chat.name}</p>
										</div>
									</button>
								})
							}


							{/*<div*/}
							{/*	className='flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-dark-green'*/}
							{/*>*/}
							{/*	<div className='w-1/4'>*/}
							{/*		<img*/}
							{/*			src='https://source.unsplash.com/L2cxSuKWbpo/600x600'*/}
							{/*			className='object-cover h-12 w-12 rounded-full'*/}
							{/*			alt=''*/}
							{/*		/>*/}
							{/*	</div>*/}
							{/*	<div className='w-full'>*/}
							{/*		<div className='text-lg font-semibold'>MERN Stack</div>*/}
							{/*		<span className='text-gray'>Lusi : Thanks Everyone</span>*/}
							{/*	</div>*/}
							{/*</div>*/}

							{/*end user list */}
						</div>
						{/*end chat list*/}

						{/*message */}
						<div className='w-full px-5 flex flex-col content-between'>
							<div className={clsx('scrollbar flex overflow-y-scroll h-5/6 flex-col mt-5', userStore.chat && userStore.chat?.length > 6 &&
								'scrollbar-thumb-light-gray scrollbar-track-gray scrollbar-thin')}>
								{
									userStore.chat.map((message) => {
										return <div ref={messagesEndRef} className={clsx('flex mt-2', message.author === userStore.user.id ?
											'justify-end' : 'justify-start')}>
											{
												message.author !== userStore.user.id && <div className='relative'><IconContext.Provider value={{ size: '4vh' }}>
													<button className='px-2.5 py-2.5 text-white' onClick={() => {
														userStore.setIsReading(usersById[message.author])
													}}><IoLogoOctocat />
													</button>
												<span className='absolute bottom-0 left-2.5 text-gray'>{message.time}</span>
												</IconContext.Provider></div>
											}
											<div className='relative text-white'>
												<span className={clsx('absolute top-2 font-bold', message.author === userStore.user.id ? ' right-0' : 'left-0')}>
													{usersById[message.author]['name']}</span>
												<div
												className={clsx('mt-10 py-2 px-3',
													message.author === userStore.user.id ? 'mr-2 bg-dark-green rounded-bl-3xl rounded-tl-3xl rounded-tr-xl' :
														'ml-2 bg-gray rounded-br-3xl rounded-tr-3xl rounded-tl-xl')}
											>
												{message.message}
											</div></div>
											{
												message.author === userStore.user.id && <div className='relative'><IconContext.Provider value={{ size: '2em' }}>
													<button className='px-2.5 py-2.5 text-white' onClick={() => {
														userStore.setIsProfile(true)
													}}><TbCat />
													</button>
													<span className='absolute bottom-0 right-2.5 text-gray'>{message.time}</span>
												</IconContext.Provider></div>
											}
										</div>
									})
								}

							</div>
							<div className='relative h-1/6 py-5'>
								<IconContext.Provider value={{ size: '4vh' }}>
									<button className='px-2.5 py-2.5 text-dark-green absolute right-0 top-3.5 z-10' onClick={() => {
										// userStore.setIsProfile(true)
										sendMessage().then(r=>console.log(r))
										setCurrMessage('')
									}}><IoSendSharp />
									</button>
								</IconContext.Provider>
								<input value={currMessage} onChange={e => {
									setCurrMessage(e.target.value)
								}}
											 className='w-full h-full pl-3 pr-14 bg-white placeholder-gray rounded-xl'
											 type='text'
											 placeholder='Введите сообщение...'
								/>

							</div>
						</div>
						{/*end message*/}
						<div className='min-w-fit border-l-2 border-gray px-5'>
							<div className='flex flex-col text-white'>
								<div className='font-semibold text-xl pt-4'>{selectedChat.name}</div>
								<div className='font-semibold pt-4'>Владелец: {selectedChat.owner === userStore.user.id ? 'Вы' :
									usersById[selectedChat.owner]['name']}</div>
								{
									selectedChat.participants?.length !== 0 && <div className='font-semibold pt-2'>Участники:</div>}
								{
									selectedChat.participants?.map((participant) => {
										return <span onClick={() => {
											userStore.setIsReading(usersById[participant])}} className='cursor-pointer pl-8 pt-2'>
											{usersById[participant]['name']}</span>
									})
								}
								{/*<div className='font-semibold text-white py-4'>{usersById[selectedChat.topicId]}</div>*/}
								{/*<div className='font-semibold text-white py-4'>{selectedChat.format}</div>*/}
								{/*<div className='font-light'>*/}
								{/*	Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,*/}
								{/*	perspiciatis!*/}
								{/*</div>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
})

export default Dialogs