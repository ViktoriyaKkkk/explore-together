import { useAppContext } from '../context/AppContext'
import { observer } from 'mobx-react-lite'
import { Link, useLocation } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import { clsx } from 'clsx'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import ReadModal from './ReadModal'


const Header = observer(() => {

	const { userStore } = useAppContext()
	const location = useLocation()

	return (<header>
			<nav className='fixed z-10 top-0 max-h-16 w-full px-4 lg:px-6 pt-1 pb-2.5 opacity-90 bg-black flex flex-wrap justify-between items-center w-screen'>
					<Link to='/' className='flex items-center'>
						<svg width="45" height="45" xmlns="http://www.w3.org/2000/svg">
							<g>
								<title>background</title>
								<rect x="-1" y="-1" width="47" height="47" id="canvas_background" fill="none"/>
								<g id="canvasGrid" display="none">
									<rect id="svg_1" width="100%" height="100%" x="0" y="0" strokeWidth="0" fill="url(#gridpattern)"/>
								</g>
							</g>

							<g>
								<title>Layer 1</title>
								<g stroke="null" id="svg_8">
									<g stroke="null" id="svg_5" transform="matrix(0.1413659717026998,0,0,0.13984424966597034,-109.2833422687982,-57.97814094204929) ">
										<path stroke="null" id="svg_6" d="m1078.903021,669.088353l-53.462,-53.462a28.306,28.306 0 0 0 -38.278,-1.617l-17.409,-17.408a107.7,107.7 0 1 0 -17.134,17.132l17.408,17.409a28.3,28.3 0 0 0 1.618,38.276l53.463,53.461a28.319,28.319 0 0 0 40.046,0l13.747,-13.747a28.314,28.314 0 0 0 0,-40.044l0.001,0zm-252.422,-80.573a83.479,83.479 0 1 1 59.026,24.448a82.932,82.932 0 0 1 -59.026,-24.448zm235.29,103.485l-13.747,13.745a4.088,4.088 0 0 1 -5.78,0l-53.465,-53.462a4.085,4.085 0 0 1 0,-5.777l13.748,-13.749a4.091,4.091 0 0 1 5.78,0l53.463,53.462a4.087,4.087 0 0 1 0,5.778l0.001,0.003z" fill="#40936b"/>
									</g>
								</g>
								<g stroke="null" id="svg_11">
									<path stroke="null" d="m26.463334,16.083611a10.576164,10.024862 0 1 1 -10.576168,-10.024859a10.576164,10.024862 0 0 1 10.576168,10.024859zm-5.50383,2.989605a0.637217,0.603999 0 0 0 -0.048092,-0.211462a0.780153,0.739488 0 0 0 -0.187022,-0.249452l-0.51298,-0.487501l-0.14828,-0.138021l-0.002675,-0.002532l-3.288935,-3.120027l-0.004007,-0.006332l-0.380729,-0.360882l-1.070037,1.014263a1.565653,1.484038 0 0 1 -0.732065,0.412796a1.466798,1.390338 0 0 1 -1.347904,-0.308965l-0.013357,-0.012663l-0.02271,-0.018992l-0.233781,-0.221593a1.482826,1.405533 0 0 1 -0.444845,-0.811662a1.533589,1.45365 0 0 1 0.056106,-0.652117a1.637791,1.552418 0 0 1 0.348665,-0.572344l0.010686,-0.01266l0.017367,-0.016463l0.792178,-0.750884l-1.713936,-1.656249l-3.274243,3.15295l0.829581,0.74202l0.818895,0.774943a2.047905,1.941155 0 0 0 -0.042749,0.582472a2.765274,2.621127 0 0 0 0.145612,0.649585a3.435886,3.256781 0 0 0 0.356679,0.692635a4.35898,4.131759 0 0 0 0.605157,0.704031l4.642182,4.400202a0.610496,0.578673 0 0 0 0.216414,0.136754a0.581107,0.550818 0 0 0 0.219085,0.031658a0.388743,0.368478 0 0 0 0.24981,-0.111431l0.228435,-0.215262a0.451527,0.427991 0 0 0 0.102862,-0.189939a0.474238,0.449518 0 0 0 -0.002671,-0.207662a0.557061,0.528023 0 0 0 -0.16565,-0.248184l-0.561068,-0.536887a0.172329,0.163344 0 0 1 -0.004007,-0.238056l0.112212,-0.086104a0.117558,0.111431 0 0 1 0.164315,0l0.854963,0.795202q0.420803,0.398865 0.746758,0.125358l0.227099,-0.216529a0.54504,0.516627 0 0 0 0.088166,-0.111427a0.331297,0.314029 0 0 0 0.040078,-0.157016a0.491605,0.465978 0 0 0 -0.057442,-0.202598a0.993896,0.942087 0 0 0 -0.196375,-0.241853l-0.825574,-0.766079a0.183015,0.173476 0 0 1 -0.001336,-0.244385l0.082824,-0.079772a0.166986,0.15828 0 0 1 0.243131,0.003796l0.895041,0.864847c0.030724,0.03039 0.072135,0.068377 0.125573,0.113962a0.547711,0.519159 0 0 0 0.176336,0.105099a0.41145,0.390005 0 0 0 0.211068,0.024059a0.423474,0.401401 0 0 0 0.231106,-0.129158l0.288552,-0.273511a0.54504,0.516627 0 0 0 0.088166,-0.111427a0.329962,0.312761 0 0 0 0.040078,-0.157016a0.498284,0.472309 0 0 0 -0.05477,-0.198799a0.769468,0.729357 0 0 0 -0.169658,-0.217794l-0.862977,-0.800269a0.228435,0.216529 0 0 1 0.001336,-0.307697l0.03206,-0.034187a0.187025,0.177275 0 0 1 0.27252,0.007596l0.725383,0.701502c0.020039,0.018992 0.053435,0.05065 0.104198,0.0937a0.701337,0.66478 0 0 0 0.177672,0.111431a0.463552,0.439387 0 0 0 0.223092,0.039254a0.391414,0.37101 0 0 0 0.245803,-0.125358l0.228435,-0.216529a0.462216,0.438119 0 0 0 0.064124,-0.088636a0.331297,0.314029 0 0 0 0.038739,-0.157016l0.001336,0.001268zm1.966417,-5.089038l-3.259547,-3.089637l-1.208974,1.14595a8.664521,8.212865 0 0 0 -1.282444,-0.160812a4.312223,4.087437 0 0 0 -0.726719,0.018995a2.709164,2.567945 0 0 0 -0.685309,0.160812a1.675194,1.587872 0 0 0 -0.578436,0.357083l-1.568324,1.487837l-0.002671,0.002532a0.725383,0.687571 0 0 0 -0.156297,0.251984l-0.001336,0.006332a0.627863,0.595136 0 0 0 -0.021375,0.265911a0.591796,0.560945 0 0 0 0.18435,0.314026l0.227099,0.215262a0.561072,0.531823 0 0 0 0.247138,0.122826l0.005346,0.001268a0.55439,0.525491 0 0 0 0.264502,-0.006332a0.669277,0.63439 0 0 0 0.30458,-0.183607l1.39466,-1.321957a0.460877,0.436855 0 0 1 0.650574,0l3.996954,3.794935l0.053435,0.05065l0.106873,-0.151949a3.367755,3.192204 0 0 0 0.348665,-0.676176a2.751913,2.608464 0 0 0 0.142937,-0.640721a2.270997,2.152617 0 0 0 0,-0.321625a0.455534,0.431791 0 0 1 0.026717,-0.183607l1.5376,-1.459979zm-4.157259,6.161547l0.005343,-0.003796a0.500955,0.474841 0 0 1 -0.046756,0.027855a0.591796,0.560945 0 0 1 0.041413,-0.025323l0,0.001264z" id="svg_12" fill="#6fcf97"/>
								</g>
							</g>
						</svg>

						<span className='text-xl whitespace-nowrap text-white'>ExploreTogether</span>
					</Link>

					{
						userStore._user.role !== '641e18b855a5d5389d78aba8' &&
						<div className='hidden justify-between w-full sm:flex sm:w-auto' id='mobile-menu-2'>
							<ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
									<Link to='/'
												className={clsx('pt-2 text-lg pr-4 pl-3 text-white',
													location.pathname==='/' && 'drop-shadow-[0_6px_3px_rgba(111,207,151,0.8)] pb-0.5 block border-b-2 border-b-dark-green' )}
												aria-current='page'>Главная</Link>
								<Link to='/about/'
											className={clsx('pt-2 text-lg pr-4 pl-3 text-white',
												location.pathname==='/about/' && 'drop-shadow-[0_6px_3px_rgba(111,207,151,0.8)] pb-0.5 block border-b-2 border-b-dark-green' )}>О нас</Link>
								{
									userStore._isAuth === true &&
									<>
										<Link to='/mysearch/'
													className={clsx('pt-2 text-lg pr-4 pl-3 text-white',
														location.pathname==='/mysearch/' && 'drop-shadow-[0_6px_3px_rgba(111,207,151,0.8)] pb-0.5 block border-b-2 border-b-dark-green' )}>Мой поиск</Link>
									</>
								}


							</ul>
						</div>
					}

				<div className='flex items-center'>
					{userStore._isAuth ?
						<Link to='/' onClick={() => {
							userStore.setIsAuth(false)
							userStore.setUser({})
							localStorage.clear('token')
							localStorage.clear('city')
						}}
									className='text-gray-800 dark:text-white
							 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5
							 mr-2 hover:bg-gray hover:bg-opacity-20 focus:outline-none'>
							Выйти</Link>
						:
						<Link to='/' onClick={() => userStore.setIsLogin(!userStore._isLogin)}
									className='text-lg text-gray-800 dark:text-white hover:bg-gray-50 hover:bg-gray hover:bg-opacity-20 font-medium rounded-lg px-4
									lg:px-5 py-2 lg:py-2.5
							 mr-2 focus:outline-none'>
							{
								userStore._isLogin ? 'Регистрация' : 'Войти'
							}
						</Link>
					}
					{userStore._isAuth && userStore._user.role === '641e18b855a5d5389d78aba7' && <IconContext.Provider value={{ size: '2em' }}>
						<button className='px-2.5 py-2.5 text-white' onClick={() => {
							userStore.setIsProfile(true)
						}}><CgProfile />
						</button>
					</IconContext.Provider>}

				</div>

			</nav>
		</header>
	)
})

export default Header