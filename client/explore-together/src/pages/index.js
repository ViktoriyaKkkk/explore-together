import Layout from '@/components/Layout'
import StartForm from '@/components/StartForm'
import RegistrationForm from '@/components/RegistrationForm'
import { useAppContext } from '@/context/AppContext'
import LoginForm from '@/components/LoginForm'
import { observer } from 'mobx-react-lite'

const StartPage = () => {
	const { isLoginStore } = useAppContext()

	return <Layout>
		<div className='flex flex-col h-screen bg-gray-100'>
			<StartForm isLoginStore={isLoginStore}>
			</StartForm>
		</div>
	</Layout>
}

export default StartPage
