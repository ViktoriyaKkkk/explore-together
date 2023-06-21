import React, { useEffect, useMemo } from 'react'
import Layout from '../components/Layout'
import StartForm from '../components/StartForm'
import { useAppContext } from '../context/AppContext'
import Main from '../components/Main'
import { observer } from 'mobx-react-lite'
import Admin from '../components/Admin'
import Profile from '../components/Profile'
import { useSearch } from '../utils/useSearch'
import { useLocation } from 'react-router-dom'
import * as mobx from 'mobx'
import StartSocket from '../components/StartSocket'

const Start = observer(() => {

	const { userStore } = useAppContext()

	// const [searches, err, load] = useSearch()
	// const chats = useMemo(() => searches?.filter(search => {
	// 	let res = false
	// 	search.owner === userStore._user.id ? res = true : search.participants.forEach((item) => {
	// 		if (item === userStore._user.id) {
	// 			res = true
	// 		}
	// 	})
	// 	return res
	// }), [searches, userStore])
	//
	// useMemo(()=>chats?.forEach((item)=>{
	// 	userStore.socket.emit('join_room', item._id)
	// 	console.log('joined ', item._id)
	// }),[chats,userStore.socket])
	//
	// const location = useLocation()
	// useEffect(() => {
	// 	userStore.socket.on('receive_message', (data) => {
	// 		userStore.setChat([...userStore.chat, data])
	//
	// 		if (data.searchId !== location.pathname.split('/')[2]) {
	// 			userStore.setNotifications([...userStore.notifications, data])
	// 			console.log('zzzzzzzzzz', mobx.toJS(userStore.notifications))
	// 		}
	// 	})
	// 	console.log(userStore.socket)
	// }, [userStore.socket, location])

	return (
		<>
			{
				userStore.isProfile && <Profile/>
			}
			{
				userStore._isAuth ?
					userStore._user.role === '641e18b855a5d5389d78aba8' ? <Admin/> :
					<StartSocket/> : <StartForm/>
			}
	</>
	)
})

export default Start