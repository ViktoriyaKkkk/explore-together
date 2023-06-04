import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { observer } from 'mobx-react-lite'
import Layout from '../components/Layout'
import { useSearch } from '../utils/useSearch'
import { useUsers } from '../utils/useUsers'
import { useLevels } from '../utils/useLevels'
import { useDurations } from '../utils/useDurations'
import { usePeriodicities } from '../utils/usePeriodicities'
import { useTimes } from '../utils/useTimes'
import { useFormats } from '../utils/useFormat'
import { useCities } from '../utils/useCities'
import { useAges } from '../utils/useAges'
import { useSections } from '../utils/useSections'
import { useTopics } from '../utils/useTopics'
import updateSearch from '../components/UpdateSearch'
import { updateSearches } from '../api/api.search'
import ModalLayout from '../components/ModalLayout'
import ReadModal from '../components/ReadModal'
import { readOneUser } from '../api/api.user'
import { IconContext } from 'react-icons'
import { IoClose } from 'react-icons/io5'
import { createReports } from '../api/api.report'
import Profile from '../components/Profile'

const MySearch = observer(() => {

	const navigate = useNavigate()
	const { userStore, AdminInstance } = useAppContext()
	useEffect(() => {
		if (Object.keys(userStore._user).length === 0) {
			navigate('/')
		}
	})

	const [searches, err, load] = useSearch()
	const ownersSearches = useMemo(() => searches?.filter(search => {
		return search.owner === userStore._user.id
	}), [searches, userStore])
	const participantsSearches = useMemo(() => searches?.filter(search => {
		let res = false
		search.participants.forEach((item) => {
			if (item === userStore._user.id) {
				res = true
			}
		})
		return res
	}), [searches, userStore])

	const [levels] = useLevels()
	const levelsById = useMemo(() => {
		return levels?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr }
		}, {})
	}, [levels])

	const [sections] = useSections()
	const sectionsById = useMemo(() => {
		return sections?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr }
		}, {})
	}, [sections])

	const [topics] = useTopics()
	const topicsById = useMemo(() => {
		return topics?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr }
		}, {})
	}, [topics])

	const [durations] = useDurations()
	const durationsById = useMemo(() => {
		return durations?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr['name'] }
		}, {})
	}, [durations])

	const [periodicities, errorPeriodicity] = usePeriodicities()
	const periodicitiesById = useMemo(() => {
		return periodicities?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr['name'] }
		}, {})
	}, [periodicities])

	const [times, errorTime] = useTimes()
	const timesById = useMemo(() => {
		return times?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr['name'] }
		}, {})
	}, [times])

	const [formats, errorFormat] = useFormats()
	const formatsById = useMemo(() => {
		return formats?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr['name'] }
		}, {})
	}, [formats])

	const [cities, errorCity] = useCities()
	const citiesById = useMemo(() => {
		return cities?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr['name'] }
		}, {})
	}, [cities])

	const [ages, errorAge] = useAges()
	const agesById = useMemo(() => {
		return ages?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr['name'] }
		}, {})
	}, [ages])

	const [users, error] = useUsers()
	const usersById = useMemo(() => {
		return users?.reduce((prev, curr) => {
			return { ...prev, [curr._id]: curr }
		}, {})
	}, [users])

	const [reportText, setReportText] = useState('')
	// console.log(searches)
	if (Object.keys(levelsById).length === 0 || Object.keys(sectionsById).length === 0 || Object.keys(topicsById).length === 0 ||
		Object.keys(usersById).length === 0 || searches === []) {
		// console.log('done')
		return <Layout></Layout>
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
						<p htmlFor='name'
							 className='text-xl font-semibold'>Имя: {userStore.isReading.name}</p>
						<p htmlFor='name'
							 className='text-xl font-semibold'>Пол: {userStore.isReading.gender}</p>
						<p htmlFor='name' className='text-xl font-semibold'>Социальная
							сеть: {userStore.isReading.socialNetwork}</p>
						<p htmlFor='name'
							 className='text-xl font-semibold'>Информация: {userStore.isReading.info ? userStore.isReading.info : '-'}</p>
					</div>

				</ReadModal>}

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

				<div className='p-7 space-y-6'>
					<label htmlFor='report' className='inline text-xl font-semibold text-white'>Опишите вашу
						жалобу: </label>
					<textarea cols='40' rows='3' id='report' name='report' placeholder='Введите текст жалобы'
										autoComplete='report'
										value={reportText} onChange={e => setReportText(e.target.value)}
										className='block w-full px-4 py-2 mt-2 text-gray bg-black font-semibold
								border border-gray rounded-md focus:border-dark-green focus:outline-none focus:ring-2 focus:ring-light-green'
										required />
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
			<div
				className='min-h-screen pt-14 flex flex-col'>
				<h2 className='mt-10 mb-2 text-3xl text-white text-center font-bold'>Ваши поисковые запросы</h2>
				<div
					className={'grid grid-cols-1 gap-6 mt-4 xl:grid-cols-3 md:grid-cols-2 3xl:w-3/5 w-4/5 my-5 place-self-center text-white place-content-center'}>
					{
						ownersSearches?.map((item) => {
							return <div key={item._id}
													className='flex flex-col place-content-between mr-5 mb-5 p-6 border border-gray rounded-lg shadow bg-black'>
								<div className='flex flex-col mx-auto'>
									<h3 className='mb-2 text-2xl text-center font-bold tracking-tight'>{item.name}</h3>
									<div className='text-xl w-fit justify-self-center mr-0'>
										<p
											className='mb-3 text-xl w-fit font-normal'>Тема: {topicsById[sectionsById[levelsById[item.level]?.sectionId]?.topicId]?.name}</p>
										<p
											className='mb-3 w-fit font-normal'>Раздел: {sectionsById[levelsById[item.level]?.sectionId]?.name}</p>
										<p
											className='mb-3 w-fit font-normal'>Уровень: {levelsById[item.level]['name']}</p>
										<p
											className='mb-3 w-fit font-normal'>Длительность: {durationsById[item.duration]}</p>
										<p className='mb-3 w-fit font-normal'>Частота
											встреч: {periodicitiesById[item.periodicity]}</p>
										<p className='mb-3 w-fit font-normal'>Количество
											времени: {timesById[item.time]}</p>
										<p className='mb-3 w-fit font-normal'>Формат: {formatsById[item.format]}</p>
										{item.city &&
											<p className='mb-3 w-fit font-normal'>Город: {citiesById[item.city]}</p>}
										<p
											className='mb-3 w-fit font-normal'>Число
											участников: {item.numberOfPeople ? item.numberOfPeople : '-'}</p>
										<p
											className='mb-3 w-fit font-normal'>Пол
											участников: {item.participantsGender}</p>
										<p className='mb-3 w-fit font-normal'>Возрастной
											диапазон: {agesById[item.age]}</p>

										<p
											className='mb-3 w-fit font-normal'>Участники:
											{
												item.participants.length !== 0 ? item.participants.map((participant) => {
													return <Link to='/mysearch/' key={participant}
																			 onClick={() => {
																				 userStore.setIsReading(usersById[participant])
																				 console.log(usersById[participant]['name'])
																			 }}
																			 className='block mb-3 w-fit ml-10 underline text-white'>{usersById[participant]['name']}</Link>
												}) : <span
													className='mb-3 font-normal text-gray-700 dark:text-gray-400'> Пока нет участников</span>
											}
										</p>
									</div>
								</div>
								<div className={'flex flex-wrap place-content-around'}>
									<button onClick={() => {
										updateSearches(item._id, !item.marker).then(r => {
											load()
											item.marker ? alert(`Вы закрыли набор участников для запроса ${item.name}`) : alert(`Вы возобновили набор участников для запроса ${item.name}`)
										})
									}}
													className='my-5 px-6 disabled:cursor-not-allowed text-xl py-2 leading-5 text-white transition-colors duration-200 transform bg-dark-green rounded-md
							hover:bg-light-green focus:outline-none'
													data-modal-target='staticModal' data-modal-toggle='staticModal'>{
										item.marker ? 'Завершить поиск' : 'Возобновить поиск'
									}
									</button>
								</div>
							</div>
						})
					}
				</div>

				<h2 className='mt-10 mb-2 text-3xl text-white text-center font-bold'>Поисковые запросы где вы - участник</h2>
				<div
					className={'grid grid-cols-1 gap-6 mt-4 xl:grid-cols-3 md:grid-cols-2 3xl:w-3/5 w-4/5 my-5 place-self-center text-white place-content-center'}>
					{
						participantsSearches?.map((item) => {
							return <div key={item._id}
													className='flex flex-col place-content-between mr-5 mb-5 p-6 border border-gray rounded-lg shadow bg-black'>
								<div className='flex flex-col mx-auto'>
									<h3 className='mb-2 text-2xl text-center font-bold tracking-tight'>{item.name}</h3>
									<div className='text-xl'>
										<p onClick={() => userStore.setIsReading(item.owner)}
											 className='mb-3 font-normal'>Владелец: {item.owner}</p>
										<p
											className='mb-3 font-normal'>Тема: {topicsById[sectionsById[levelsById[item.level]?.sectionId]?.topicId]?.name}</p>
										<p
											className='mb-3 font-normal'>Раздел: {sectionsById[levelsById[item.level]?.sectionId]?.name}</p>
										<p
											className='mb-3 font-normal'>Уровень: {levelsById[item.level]['name']}</p>
										<p
											className='mb-3 font-normal'>Длительность: {durationsById[item.duration]}</p>
										<p className='mb-3 font-normal'>Частота
											встреч: {periodicitiesById[item.periodicity]}</p>
										<p className='mb-3 font-normal'>Количество
											времени: {timesById[item.time]}</p>
										<p className='mb-3 font-normal'>Формат: {formatsById[item.format]}</p>
										{item.city &&
											<p className='mb-3 font-normal'>Город: {citiesById[item.city]}</p>}
										<p
											className='mb-3 font-normal'>Число
											участников: {item.numberOfPeople ? item.numberOfPeople : '-'}</p>
										<p
											className='mb-3 font-normal'>Пол
											участников: {item.participantsGender}</p>
										<p className='mb-3 font-normal'>Возрастной
											диапазон: {agesById[item.age]}</p>

										<p
											className='mb-3 font-normal'>Участники:
											{
												item.participants.length > 1 ? item.participants.map((participant) => {
													if (participant !== userStore._user.id) {
														return <Link to='/mysearch/' key={participant}
																				 onClick={() => userStore.setIsReading(usersById[participant])}
																				 className='block mb-3 ml-5 underline'>{participant}</Link>
													}
												}) : <span className='mb-3 font-normal'> Вы - единственный участник</span>
											}
										</p>
									</div>
								</div>
								<div className={'flex flex-wrap place-content-around'}>
									<button onClick={() => {
										updateSearches(item._id, !item.marker).then(r => {
											load()
											item.marker ? alert(`Вы закрыли набор участников для запроса "${item.name}"`) : alert(`Вы возобновили набор участников для запроса "${item.name}"`)
										})
									}}
													className='px-6 disabled:cursor-not-allowed text-xl my-5 py-2 leading-5 text-white transition-colors duration-200 transform bg-dark-green rounded-md
							hover:bg-light-green focus:outline-none'
													data-modal-target='staticModal' data-modal-toggle='staticModal'>{
										item.marker ? 'Завершить поиск' : 'Возобновить поиск'
									}
									</button>
								</div>
							</div>
						})
					}
				</div>
			</div>
		</Layout>
	)
})

export default MySearch