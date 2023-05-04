import Link from 'next/link'
import { useState } from 'react'
import { login } from '@/api/api.user'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '@/context/AppContext'

const LoginForm = observer(({ isLoginStore }) => {
console.log(isLoginStore)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const auth = async () => {
		const res = await login(email, password)
	}

	return (
		<>
			<h2 className='text-center font-semibold text-3xl lg:text-4xl text-gray-800'>
				Вход
			</h2>

			<form className='mt-10' method='POST'>

				<label htmlFor='email' className='block text-xs font-semibold text-gray-600 uppercase'>E-mail</label>
				<input id='email' type='email' name='email' placeholder='e-mail address' autoComplete='email'
							 value={email} onChange={e => setEmail(e.target.value)}
							 className='block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200'
							 required />


				<label htmlFor='password'
							 className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>Password</label>
				<input id='password' type='password' name='password' placeholder='password' autoComplete='current-password'
							 value={password} onChange={e => setPassword(e.target.value)}
							 className='block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200'
							 required />

				<button type='button'
								onClick={auth}
								className='w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none'>
					Войти
				</button>


				<div className='sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center'>

					<p className='flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto'>
						Ещё нет аккаунта?
					</p>

					<Link href='/' onClick={isLoginStore.setIsLogin(false)} className='flex-2 text-black underline'>
						Зарегистрироваться
					</Link>
				</div>
			</form>
		</>
	)
})

export default LoginForm