export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = e => {
	const message = e?.response?.data?.message

	return message
		? typeof e.response.data.message === 'object'
			? message[0]
			: message
		: e.message
}
