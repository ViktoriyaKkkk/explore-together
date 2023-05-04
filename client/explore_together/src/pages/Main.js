import React from 'react'
import Layout from '../components/Layout'
import StartForm from '../components/StartForm'

const Main = () => {

	return (<Layout>
		<div className='flex flex-col h-screen bg-gray-100'>
			<StartForm/>
		</div>
	</Layout>
	)
}

export default Main