import { useEffect, useState } from 'react'
import { login, registration } from '../api/api.user'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { observer } from 'mobx-react-lite'


const StartForm = observer(() => {

	const {userStore} = useAppContext()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [gender, setGender] = useState('Жен')

	// const [isLogin, setIsLogin] = useState(false)

	const auth = async () => {
		if (userStore._isLogin) {
			const res = await login(email, password)
		} else {
			const res = await registration(name, email, password, gender)
		}
	}

	return (
		<div className='grid place-items-center mx-2 my-20 sm:my-auto'>

			<div className='w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg'>
				<h2 className='text-center font-semibold text-3xl lg:text-4xl text-gray-800'>
					{ userStore._isLogin ? "Вход" : 'Регистрация'}
				</h2>

				<form className='mt-10' method='POST'>
					{
						!userStore._isLogin && <>
						<label htmlFor='name' className='block text-xs font-semibold text-gray-600 uppercase'>Name</label>
							<input id='name' type='name' name='name' placeholder='name' autoComplete='name'
										 value={name} onChange={e => setName(e.target.value)}
										 className='block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200'
										 required />
						</>
					}


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
					{
						!userStore._isLogin && <>
							<div className='flex items-center mb-4'>
								<input
									className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									type='radio'
									name='gender'
									value="Жен"
									id='female'
									onChange={e => setGender(e.target.value)}
									checked={gender === "Жен" ? true : false}/>
								<label
									className='mt-px text-black inline-block pl-[0.15rem] hover:cursor-pointer'
									htmlFor='female' >
									Жен
								</label>
							</div>
							<div className='flex items-center mb-4'>
								<input
									className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									type='radio'
									name='gender'
									value='Муж'
									id='male'
									onChange={e => setGender(e.target.value)}
									checked={gender === "Муж" ? true : false}/>
								<label
									className='mt-px inline-block text-black pl-[0.15rem] hover:cursor-pointer'
									htmlFor='male'>
									Муж
								</label>
							</div>
						</>
					}


					<button type='button'
									onClick={auth}
									className='w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none'>
						{ userStore._isLogin ? "Войти" : 'Зарегистрироваться'}
					</button>


					<div className='sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center'>

						<p className='flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto'>
							{
								userStore._isLogin ? 'Ещё нет аккаунта?' : 'Уже есть аккаунт?'
							}

						</p>

						<Link href='/' onClick={()=>userStore.setIsLogin(!userStore._isLogin)} className='flex-2 text-black underline'>
							{
								userStore._isLogin ? 'Зарегистрироваться' : 'Войти'
							}
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
})

export default StartForm