import Layout from '../components/Layout'
import { useAppContext } from '../context/AppContext'
import Profile from '../components/Profile'
import { observer } from 'mobx-react-lite'

const About = observer(() => {
	const { userStore } = useAppContext()
	console.log("user ", userStore.user)
	return (
		<Layout>
			{
				userStore.isProfile && <Profile/>
			}
			<h1>About us</h1>
		</Layout>
	)
})

export default About