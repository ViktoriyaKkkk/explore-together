import {$authHost, $host} from '@/api/api.interceptor'
import jwtDecode from 'jwt-decode'

export const registration = async (name, email, password, gender) => {
	const { data } = await $host.post('/auth/registration', {email, password, name, gender})
	console.log(jwtDecode(data))
	localStorage.setItem("token", data)
	return jwtDecode(data)
}

export const login = async (email, password) => {
	const { data } = await $host.post('/auth/login', {email, password})
	localStorage.setItem("token", data)
	return jwtDecode(data)
}
export const check = async () => {
	const { data } = await $authHost.get('/auth/check')
	localStorage.setItem("token", data)
	return jwtDecode(data)
}