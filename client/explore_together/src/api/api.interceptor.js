import axios from 'axios'
import { getContentType } from './api.helper'

export const $host = axios.create({
	baseURL: 'http://localhost:5000/api'
})

export const $authHost = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType(),
})

$authHost.interceptors.request.use(config => {
	console.log("req:",config)

	if (config.headers) {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	}
	return config
})

$host.interceptors.request.use(config => {
	console.log(config)
	return config
})