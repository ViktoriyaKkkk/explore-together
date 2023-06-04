import React, { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { useUsers } from '../utils/useUsers'

import Layout from '../components/Layout'
import UpdateUser from '../components/UpdateUser'
import { deleteUsers, updateUsers } from '../api/api.user'
import DeleteModal from '../components/DeleteModal'
import Sidebar from '../components/Sidebar'
import { IconContext } from 'react-icons'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useSearch } from '../utils/useSearch'
import { deleteSearches, updateSearches } from '../api/api.search'
import { isEditable } from '@testing-library/user-event/dist/utils'
import UpdateSearch from '../components/UpdateSearch'

const Search = observer(() => {

	const navigate = useNavigate()
	const { userStore } = useAppContext()
	// useEffect(()=>{
	useEffect(()=>{
		if (Object.keys(userStore._user).length === 0 || userStore._user.role === '641e18b855a5d5389d78aba7') {
			navigate("/")
		}})

	const {AdminInstance} = useAppContext()

	const [searches, error, load] = useSearch()
	const searchesById = useMemo(()=>{
		return searches?.reduce((prev, curr)=>{
			return {...prev, [curr._id]:curr}
		}, {})
	}, [searches])
	return (
		<Layout>
			{
				AdminInstance._isEditing !== '' && <UpdateSearch document={'Searches'} records={searchesById} load={load} updateFunc={updateSearches}/>
			}
			{
				AdminInstance._isDeleting!=='' && <DeleteModal document={'Searches'} load={load} deleteFunc={deleteSearches}/>
			}
			<Sidebar />
			<div className={'flex flex-wrap ml-52 my-5 place-content-center'}>
			{
				searches?.map((item)=>{
					return 			<div key={item._id}
						className="flex flex-col place-content-between basis-1/4 mr-5 mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div>
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item._id}</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Name: {item.name}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Owner: {item.owner}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Level: {item.level}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration: {item.duration}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Periodicity: {item.periodicity}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Time: {item.time}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Format: {item.format}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">City: {item.city ? item.city : '-'}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">NumberOfPeople: {item.numberOfPeople ? item.numberOfPeople : '-'}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ParticipantsGender: {item.participantsGender}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">SearchGender: {item.searchGender}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Age: {item.age}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Participants:</p> {item.participants.map((participant)=>{
							return <p key={participant} className="mb-3 ml-5 font-normal text-gray-700 dark:text-gray-400">{participant}</p>
						})}
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Marker: {`${item.marker}`}</p>
						</div>
						<div className={'flex flex-wrap place-content-between'}>
						<button onClick={()=>{
							AdminInstance.setIsModal(false)
							AdminInstance.setIsEditing(item._id)
						}}
										className='my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
										font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										data-modal-target="staticModal" data-modal-toggle="staticModal" >Редактировать
						</button>

						<button onClick={()=>{
							AdminInstance.setIsModal(false)
							AdminInstance.setIsDeleting(item._id)
						}}
										className='my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
										font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										data-modal-target="staticModal" data-modal-toggle="staticModal" >Удалить
						</button></div>
					</div>
				})
			}
		</div>
		</Layout>

	)
})

export default Search