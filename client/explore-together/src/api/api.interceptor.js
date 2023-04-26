import axios from 'axios'
import { getContentType } from '@/api/api.helper'
import { getAccessToken } from '@/services/auth.helper'

const instance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType(),
})

instance.interceptors.request.use(config => {
	console.log("req:",config)
	// const accessToken = getAccessToken()
	// if (config.headers && accessToken) {
	// 	config.headers.Authorization = `Bearer ${accessToken}`
	// }
})