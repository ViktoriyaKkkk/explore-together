import React, { useEffect, useMemo } from 'react'
import { useAppContext } from '../context/AppContext'
import { useReports } from '../utils/useReports'
import { deleteReports, updateReports } from '../api/api.report'
import DeleteModal from '../components/DeleteModal'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { BiEdit } from 'react-icons/bi'
import { IconContext } from "react-icons";
import { RiDeleteBin5Line } from 'react-icons/ri'
import { MdDoneOutline } from 'react-icons/md'

const Report = observer(() => {

	const navigate = useNavigate()
	const { userStore } = useAppContext()
	useEffect(()=>{
		if (Object.keys(userStore._user).length === 0 || userStore._user.role === '641e18b855a5d5389d78aba7') {
			navigate("/")
		}})

	const {AdminInstance} = useAppContext()

	const [reports, error, load] = useReports()
	const reportsById = useMemo(()=>{
		return reports?.reduce((prev, curr)=>{
			return {...prev, [curr._id]:curr}
		}, {})
	}, [reports])

	return (
		<Layout>
			{
				AdminInstance._isDeleting!=='' && <DeleteModal document={'Reports'} load={load} deleteFunc={deleteReports}/>
			}
			<Sidebar />
			<div className='relative mt-5 mr-5 ml-52 overflow-x-auto shadow-md sm:rounded-lg'>

				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Report id
						</th>
						<th scope='col' className='px-6 py-3'>
							Sender
						</th>
						<th scope='col' className='px-6 py-3'>
							Offender
						</th>
						<th scope='col' className='px-6 py-3'>
							ReportText
						</th>
						<th scope='col' className='px-6 py-3'>
							Processed
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
					</thead>
					<tbody>
					{
						reports.map((item)=>{
							return <tr key={item._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
								<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
									{item._id}
								</th>
								<td className='px-6 py-4'>
									{item.sender}
								</td>
								<td className='px-6 py-4'>
									{item.offender}
								</td>
								<td className='px-6 py-4'>
									{item.reportText}
								</td>
								<td className='px-6 py-4'>
									{`${item.processed}`}
								</td>
								<td className='px-6 py-4'>
									<IconContext.Provider value={{ size: '2em'}}><button className='px-2.5 py-2.5' onClick={()=> {
										updateReports(item._id, true).then(r=>load())
									}}><MdDoneOutline/>
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

export default Report