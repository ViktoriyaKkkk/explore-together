import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '../context/AppContext'

import ModalLayout from './ModalLayout'
import { IconContext } from 'react-icons'
import { IoClose } from 'react-icons/io5'

const UpdateUser = observer(({document, records, load, updateFunc}) => {

	const { AdminInstance } = useAppContext()
	const [name,setName] = useState(records[AdminInstance._isEditing]['name'])
	const [email,setEmail] = useState(records[AdminInstance._isEditing]['email'])
	const [role,setRole] = useState(records[AdminInstance._isEditing]['role'])
	const [gender,setGender] = useState(records[AdminInstance._isEditing]['gender'])
	const [socialNetwork,setSocialNetwork] = useState(records[AdminInstance._isEditing]['socialNetwork'] || '')
	const [info,setInfo] = useState(records[AdminInstance._isEditing]['info'] || '')

	return (
		<ModalLayout admin={true} func={()=> {
			updateFunc(AdminInstance._isEditing, name, email,role, '', '', gender, socialNetwork, info).then(r=> {
				console.log(r)
				load()
			})
			AdminInstance.setIsEditing('')
		}}>
			<div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
				<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
					Редактирование записи из документа {document} с id={AdminInstance._isEditing}
				</h3>
				<button type='button' onClick={() => {
					AdminInstance.setIsModal(!AdminInstance._isModal)
					AdminInstance.setIsEditing('')
				}}
								className='text-white bg-transparent hover:bg-gray hover:text-dark-white rounded-lg text-sm
								 p-1.5 ml-auto inline-flex items-center'
								data-modal-hide='staticModal'>

					<IconContext.Provider value={{ size: '2em'}}><IoClose/></IconContext.Provider>
				</button>
			</div>

			<div className='px-6 space-y-6'>
				<label htmlFor='name' className='inline text-xl font-semibold text-gray-500 dark:text-gray-400'>Name: </label>
				<input id='name' type='name' name='name' placeholder='name' autoComplete='name'
							 value={name} onChange={e => setName(e.target.value)}
							 className='block w-full px-4 py-2 mt-1 text-gray-700 bg-white
								border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
								dark:focus:border-blue-500 focus:outline-none focus:ring'/>
			</div>

			<div className='px-6 pt-3 space-y-6'>
				<label htmlFor='email' className='inline text-xl font-semibold text-gray-500 dark:text-gray-400'>Email: </label>
				<input id='email' type='email' name='email' placeholder='email' autoComplete='email'
							 value={email} onChange={e => setEmail(e.target.value)}
							 className='block w-full px-4 py-2 mt-1 text-gray-700 bg-white
								border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
								dark:focus:border-blue-500 focus:outline-none focus:ring'/>
			</div>

			<div className='px-6 pt-3 space-y-6'>
				<label className='inline text-xl font-semibold text-gray-500 dark:text-gray-400'>Role: </label>
				<select value={role} onChange={e => setRole(e.target.value)}
								className='block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800
											dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'>
					<option value={'641e18b855a5d5389d78aba7'}>641e18b855a5d5389d78aba7 - USER</option>
					<option value={'641e18b855a5d5389d78aba8'}>641e18b855a5d5389d78aba8 - ADMIN</option>
				</select>
			</div>

			<div className='px-6 pt-3 space-y-6'>
				<label className='inline text-xl font-semibold text-gray-500 dark:text-gray-400'>Gender: </label>
				<select value={gender} onChange={e => setGender(e.target.value)}
								className='block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800
											dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'>
					<option value={'Жен'}>Жен</option>
					<option value={'Муж'}>Муж</option>
				</select>
			</div>

			<div className='px-6 pt-3 space-y-6'>
				<label htmlFor='socialNetwork' className='inline text-xl font-semibold text-gray-500 dark:text-gray-400'>SocialNetwork: </label>
				<input id='socialNetwork' type='socialNetwork' name='socialNetwork' placeholder='socialNetwork' autoComplete='socialNetwork'
							 value={socialNetwork} onChange={e => setSocialNetwork(e.target.value)}
							 className='block w-full px-4 py-2 mt-1 text-gray-700 bg-white
								border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
								dark:focus:border-blue-500 focus:outline-none focus:ring'/>
			</div>

			<div className='px-6 pb-6 pt-3 space-y-6'>
				<label htmlFor='info' className='inline text-xl font-semibold text-gray-500 dark:text-gray-400'>Info: </label>
				<input id='info' type='info' name='info' placeholder='info' autoComplete='info'
							 value={info} onChange={e => setInfo(e.target.value)}
							 className='block w-full px-4 py-2 mt-1 text-gray-700 bg-white
								border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
								dark:focus:border-blue-500 focus:outline-none focus:ring'/>
			</div>
		</ModalLayout>
	)
})

export default UpdateUser