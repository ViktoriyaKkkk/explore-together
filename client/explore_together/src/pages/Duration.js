import React, { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '../context/AppContext'
import { useAges } from '../utils/useAges'
import Layout from '../components/Layout'
import UpdateModal from '../components/UpdateModal'
import DeleteModal from '../components/DeleteModal'
import CreateModal from '../components/CreateModal'
import Sidebar from '../components/Sidebar'
import { useDurations } from '../utils/useDurations'
import { createAges } from '../api/api.age'
import { createDurations, deleteDurations, updateDurations } from '../api/api.duration'
import { useNavigate } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IconContext } from 'react-icons'

const Duration = observer(() => {

	const navigate = useNavigate()
	const { userStore } = useAppContext()
	useEffect(()=>{
		if (Object.keys(userStore._user).length === 0 || userStore._user.role === '641e18b855a5d5389d78aba7') {
			navigate("/")
		}})
	const {AdminInstance} = useAppContext()

	const [durations, error, load] = useDurations()
	const durationsById = useMemo(()=>{
		return durations?.reduce((prev, curr)=>{
			return {...prev, [curr._id]:[curr.name]}
		}, {})
	}, [durations])

	return (
		<Layout>
			{
				AdminInstance._isEditing !== '' && <UpdateModal document={'Durations'} records={durationsById} load={load} updateFunc={updateDurations}/>
			}
			{
				AdminInstance._isDeleting!=='' && <DeleteModal document={'Durations'} load={load} deleteFunc={deleteDurations}/>
			}
			{
				AdminInstance._isCreating && <CreateModal document={'Durations'} load={load} createFunc={createDurations}/>
			}
			<Sidebar />
			<button onClick={()=>{
				AdminInstance.setIsModal(false)
				AdminInstance.setIsCreating(true)
			}}
							className='my-5 ml-52 px-6 disabled:cursor-not-allowed text-xl py-2 leading-5 text-white transition-colors duration-200 transform bg-dark-green rounded-md
							hover:bg-light-green focus:outline-none'
							data-modal-target="staticModal" data-modal-toggle="staticModal" >Добавить запись
			</button>
			<div className='relative mt-5 mr-5 ml-52 overflow-x-auto shadow-md sm:rounded-lg'>

				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Duration id
						</th>
						<th scope='col' className='px-6 py-3'>
							Duration name
						</th>
						<th scope='col' className='px-6 py-3'>
							Действие
						</th>
					</tr>
					</thead>
					<tbody>
					{
						durations.map((item)=>{
							return <tr key={item._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
								<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
									{item._id}
								</th>
								<td className='px-6 py-4'>
									{item.name}
								</td>
								<td className='px-6 py-4'>
									<IconContext.Provider value={{ size: '2em'}}><button className='px-2.5 py-2.5' onClick={()=> {
										AdminInstance.setIsModal(false)
										AdminInstance.setIsEditing(item._id)
									}}><BiEdit/>
									</button>
										<button className='px-2.5 py-2.5' onClick={()=> {
											AdminInstance.setIsModal(false)
											AdminInstance.setIsDeleting(item._id)
										}}><RiDeleteBin5Line/>
										</button></IconContext.Provider>
								</td>
							</tr>
						})
					}
					</tbody>
				</table>
			</div>
		</Layout>

	)
})

export default Duration