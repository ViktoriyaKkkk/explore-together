import React, { useState } from 'react'
import ModalLayout from './ModalLayout'
import { useAppContext } from '../context/AppContext'
import { updateAges } from '../api/api.age'
import { observer } from 'mobx-react-lite'
import { IoClose } from 'react-icons/io5'
import { IconContext } from "react-icons";

const UpdateModal = observer(({document, records, load, updateFunc }) => {

	const { AdminInstance } = useAppContext()
	const [name,setName] = useState(records[AdminInstance._isEditing])

	return (
		<ModalLayout admin={true} func={()=> {
			updateFunc(AdminInstance._isEditing, name).then(r=> {
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

			<div className='p-6 space-y-6'>
				<label htmlFor='name' className='inline text-xl font-semibold text-gray-500 dark:text-gray-400'>Name: </label>
				<input id='name' type='name' name='name' placeholder='name' autoComplete='name'
							 value={name} onChange={e => setName(e.target.value)}
							 className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white
								border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
								dark:focus:border-blue-500 focus:outline-none focus:ring'
							 required />
			</div>
		</ModalLayout>
	)
})

export default UpdateModal