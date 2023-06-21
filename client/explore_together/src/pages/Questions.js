import React, { useState } from 'react'
import Layout from '../components/Layout'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { clsx } from 'clsx'
import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import { createQuestions } from '../api/api.question'
import { Toaster } from 'react-hot-toast'
import Toast from '../components/Toast'

const Questions = () => {

	const {userStore} = useAppContext()

	const [answers, setAnswers] = useState({first:false,second:false,third:false,forth:false, fifth: false})

	const [question, setQuestion] = useState('')

	return (
		<Layout>
			<Toaster/>
			<div className='absolute w-full -z-20 h-full bg-black'>
			</div>
			<div
				className="absolute w-full -z-10 h-full [mask-image:linear-gradient(0deg,black,transparent)] bg-repeat bg-[url('../../public/img/bggrid2.svg')] ">
			</div>
			<div className='fixed bottom-0 w-full -z-40 h-full bg-black'>
			</div>
			<div
				className="fixed -bottom-7 w-full -z-30 h-full bg-repeat bg-[url('../../public/img/bggrid2.svg')] ">
			</div>
			<div className='min-h-screen mx-10 pt-12 flex flex-col items-center'>
				<h2 className='mt-5 mb-2 text-xl md:text-3xl text-white text-center font-bold mb-5'>Часто задаваемые вопросы</h2>
				<div className='md:w-8/12 w-11/12 flex flex-col md:flex-row place-content-between items-center rounded-md bg-black text-white
				 text-xl py-3 px-5 xl:py-4 border border-gray'>
					<p className='text-sm xl:text-lg'>Можно ли использовать данный сервис для поиска партнеров не только в моем городе,
						но и в других регионах?</p>
					<button onClick={
						()=> {
							setAnswers({ ...answers, first: !answers.first})
						}
					}
						className='text-light-green md:ml-7 p-2 hover:text-dark-green'><IconContext.Provider
						value={{ size: '1.5em' }}>
						{
							!answers.first ? <IoIosArrowDown/> : <IoIosArrowUp/>
						}
					</IconContext.Provider></button>
				</div>
				<div className={clsx('md:w-7/12 w-10/12 flex flex-col md:flex-row place-content-between items-center rounded-b-md ' +
					'bg-dark-gray text-white py-3 px-5 xl:py-5', !answers.first && 'hidden')}>
					<div className='md:pr-2 md:mt-0 mb-3'>
						<svg width='35' height='35' xmlns='http://www.w3.org/2000/svg'>
							<g>
								<title>background</title>
								<rect x='-1' y='-1' width='37' height='37' id='canvas_background' fill='none' />
								<g id='canvasGrid' display='none'>
									<rect id='svg_1' width='100%' height='100%' x='0' y='0' strokeWidth='0' fill='url(#gridpattern)' />
								</g>
							</g>

							<g>
								<title>Layer 1</title>
								<g stroke='null' id='svg_8'>
									<g stroke='null' id='svg_5'
										 transform='matrix(0.10722499090069627,0,0,0.10841878701443147,-79.57733733744611,-47.30615232197317) '>
										<path stroke='null' id='svg_6'
													d='m1053.101555,689.974558l-53.462,-53.462a28.306,28.306 0 0 0 -38.278,-1.617l-17.409,-17.408a107.7,107.7 0 1 0 -17.134,17.132l17.408,17.409a28.3,28.3 0 0 0 1.618,38.276l53.463,53.461a28.319,28.319 0 0 0 40.046,0l13.747,-13.747a28.314,28.314 0 0 0 0,-40.044l0.001,0zm-252.422,-80.573a83.479,83.479 0 1 1 59.026,24.448a82.932,82.932 0 0 1 -59.026,-24.448zm235.29,103.485l-13.747,13.745a4.088,4.088 0 0 1 -5.78,0l-53.465,-53.462a4.085,4.085 0 0 1 0,-5.777l13.748,-13.749a4.091,4.091 0 0 1 5.78,0l53.463,53.462a4.087,4.087 0 0 1 0,5.778l0.001,0.003z'
													fill='#40936b' />
									</g>
								</g>
								<g stroke='null' id='svg_11'>
									<path stroke='null'
												d='m20.541593,12.461958a7.906194,7.864881 0 1 1 -7.906196,-7.864879a7.906194,7.864881 0 0 1 7.906196,7.864879zm-4.114379,2.345458a0.47635,0.47386 0 0 0 -0.035951,-0.1659a0.583202,0.580157 0 0 0 -0.139808,-0.195704l-0.383477,-0.382463l-0.110846,-0.108283l-0.002,-0.001986l-2.458638,-2.447779l-0.002995,-0.004967l-0.284613,-0.283126l-0.799905,0.795728a1.170401,1.164283 0 0 1 -0.547254,0.323854a1.096502,1.090772 0 0 1 -1.007623,-0.242395l-0.009985,-0.009935l-0.016977,-0.0149l-0.174763,-0.173848a1.108484,1.102693 0 0 1 -0.332543,-0.636779a1.146432,1.140443 0 0 1 0.041942,-0.51161a1.224328,1.21793 0 0 1 0.260644,-0.449026l0.007988,-0.009932l0.012983,-0.012916l0.592191,-0.589097l-1.28125,-1.29939l-2.447655,2.473608l0.620152,0.582143l0.612164,0.607972a1.530908,1.522909 0 0 0 -0.031957,0.456971a2.067176,2.056373 0 0 0 0.108852,0.509624a2.568491,2.555067 0 0 0 0.266635,0.543398a3.258548,3.24152 0 0 0 0.452384,0.552339l3.470255,3.452124a0.456375,0.45399 0 0 0 0.16178,0.107288a0.434406,0.432137 0 0 0 0.163777,0.024837a0.290604,0.289085 0 0 0 0.186745,-0.087421l0.170766,-0.168881a0.337538,0.335775 0 0 0 0.076895,-0.149014a0.354516,0.352664 0 0 0 -0.001997,-0.162919a0.41643,0.414254 0 0 0 -0.123832,-0.19471l-0.419426,-0.421208a0.128824,0.12815 0 0 1 -0.002995,-0.186764l0.083884,-0.067552a0.087881,0.087421 0 0 1 0.122833,0l0.639126,0.623866q0.31457,0.312925 0.558237,0.098348l0.169768,-0.169875a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.247661,0.246368 0 0 0 0.02996,-0.123185a0.367499,0.365577 0 0 0 -0.042941,-0.158946a0.742985,0.739103 0 0 0 -0.1468,-0.189742l-0.617156,-0.601018a0.136812,0.136098 0 0 1 -0.000998,-0.191729l0.061915,-0.062584a0.12483,0.124177 0 0 1 0.181752,0.002978l0.669086,0.678505c0.022968,0.023842 0.053924,0.053644 0.093872,0.089408a0.409441,0.4073 0 0 0 0.13182,0.082454a0.307578,0.305974 0 0 0 0.157783,0.018875a0.316567,0.314914 0 0 0 0.172763,-0.101329l0.215706,-0.214579a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.246662,0.245373 0 0 0 0.02996,-0.123185a0.372491,0.370545 0 0 0 -0.040944,-0.155965a0.575214,0.572208 0 0 0 -0.126827,-0.170867l-0.645117,-0.627841a0.170766,0.169875 0 0 1 0.000998,-0.2414l0.023967,-0.026821a0.13981,0.139079 0 0 1 0.203722,0.005959l0.542259,0.550355c0.01498,0.0149 0.039945,0.039737 0.077893,0.073511a0.524283,0.521545 0 0 0 0.132818,0.087421a0.346528,0.344716 0 0 0 0.166772,0.030796a0.292601,0.291071 0 0 0 0.183749,-0.098348l0.170766,-0.169875a0.345529,0.343721 0 0 0 0.047936,-0.069538a0.247661,0.246368 0 0 0 0.028959,-0.123185l0.000998,0.000995zm1.469992,-3.992541l-2.436669,-2.423936l-0.903766,0.899041a6.477148,6.443301 0 0 0 -0.958689,-0.126163a3.223595,3.206748 0 0 0 -0.543257,0.014902a2.025231,2.01465 0 0 0 -0.512301,0.126163a1.252288,1.245745 0 0 0 -0.432409,0.280145l-1.172398,1.167264l-0.001997,0.001986a0.542259,0.539425 0 0 0 -0.11684,0.197691l-0.000998,0.004967a0.469358,0.466906 0 0 0 -0.015979,0.208617a0.442396,0.440083 0 0 0 0.137811,0.246365l0.169768,0.168881a0.419428,0.417235 0 0 0 0.184748,0.096362l0.003997,0.000995a0.414433,0.412268 0 0 0 0.197728,-0.004967a0.500317,0.497702 0 0 0 0.227688,-0.144047l1.042576,-1.037125a0.344528,0.342729 0 0 1 0.486335,0l2.987916,2.977269l0.039945,0.039737l0.079893,-0.11921a2.51756,2.504404 0 0 0 0.260644,-0.530485a2.057188,2.046438 0 0 0 0.106852,-0.50267a1.69768,1.688809 0 0 0 0,-0.252327a0.340534,0.338756 0 0 1 0.019973,-0.144047l1.14943,-1.145408zm-3.107752,4.833965l0.003994,-0.002978a0.374488,0.372531 0 0 1 -0.034953,0.021853a0.442396,0.440083 0 0 1 0.030959,-0.019867l0,0.000992z'
												id='svg_12' fill='#6fcf97' />
								</g>
							</g>
						</svg>
					</div>
					<p className='ml-3 text-sm xl:text-base'>Да, Explore Together не привязывает своих пользователей к одному месту,
						при создании запроса на поиск вы можете выбрать любой город, не обязательно тот,
						в котором вы находитесь на данный момент. Но советуем вам учитывать, что поменять город
						после создания запроса будет уже невозможно.</p>
				</div>
				<div className='md:w-8/12 w-11/12 mt-4 flex  flex-col md:flex-row place-content-between items-center rounded-md bg-black text-white
				 text-xl  py-3 px-5 xl:py-4 border border-gray'>
					<p className='text-sm xl:text-lg'>Как я могу связаться со своим потенциальным партнером по обучению?</p>
					<button onClick={
						()=> {
							setAnswers({ ...answers, second: !answers.second})
						}
					}
									className='text-light-green md:ml-7 p-2 hover:text-dark-green'><IconContext.Provider
						value={{ size: '1.5em' }}>
						{
							!answers.second ? <IoIosArrowDown/> : <IoIosArrowUp/>
						}
					</IconContext.Provider></button>
				</div>
				<div className={clsx('md:w-7/12 w-10/12 flex  flex-col md:flex-row place-content-between items-center rounded-b-md ' +
					'bg-dark-gray text-white text-xl py-3 px-5 xl:py-4', !answers.second && 'hidden')}>
					<div className='md:pr-2 md:mt-0 mb-3'>
						<svg width='35' height='35' xmlns='http://www.w3.org/2000/svg'>
							<g>
								<title>background</title>
								<rect x='-1' y='-1' width='37' height='37' id='canvas_background' fill='none' />
								<g id='canvasGrid' display='none'>
									<rect id='svg_1' width='100%' height='100%' x='0' y='0' strokeWidth='0' fill='url(#gridpattern)' />
								</g>
							</g>

							<g>
								<title>Layer 1</title>
								<g stroke='null' id='svg_8'>
									<g stroke='null' id='svg_5'
										 transform='matrix(0.10722499090069627,0,0,0.10841878701443147,-79.57733733744611,-47.30615232197317) '>
										<path stroke='null' id='svg_6'
													d='m1053.101555,689.974558l-53.462,-53.462a28.306,28.306 0 0 0 -38.278,-1.617l-17.409,-17.408a107.7,107.7 0 1 0 -17.134,17.132l17.408,17.409a28.3,28.3 0 0 0 1.618,38.276l53.463,53.461a28.319,28.319 0 0 0 40.046,0l13.747,-13.747a28.314,28.314 0 0 0 0,-40.044l0.001,0zm-252.422,-80.573a83.479,83.479 0 1 1 59.026,24.448a82.932,82.932 0 0 1 -59.026,-24.448zm235.29,103.485l-13.747,13.745a4.088,4.088 0 0 1 -5.78,0l-53.465,-53.462a4.085,4.085 0 0 1 0,-5.777l13.748,-13.749a4.091,4.091 0 0 1 5.78,0l53.463,53.462a4.087,4.087 0 0 1 0,5.778l0.001,0.003z'
													fill='#40936b' />
									</g>
								</g>
								<g stroke='null' id='svg_11'>
									<path stroke='null'
												d='m20.541593,12.461958a7.906194,7.864881 0 1 1 -7.906196,-7.864879a7.906194,7.864881 0 0 1 7.906196,7.864879zm-4.114379,2.345458a0.47635,0.47386 0 0 0 -0.035951,-0.1659a0.583202,0.580157 0 0 0 -0.139808,-0.195704l-0.383477,-0.382463l-0.110846,-0.108283l-0.002,-0.001986l-2.458638,-2.447779l-0.002995,-0.004967l-0.284613,-0.283126l-0.799905,0.795728a1.170401,1.164283 0 0 1 -0.547254,0.323854a1.096502,1.090772 0 0 1 -1.007623,-0.242395l-0.009985,-0.009935l-0.016977,-0.0149l-0.174763,-0.173848a1.108484,1.102693 0 0 1 -0.332543,-0.636779a1.146432,1.140443 0 0 1 0.041942,-0.51161a1.224328,1.21793 0 0 1 0.260644,-0.449026l0.007988,-0.009932l0.012983,-0.012916l0.592191,-0.589097l-1.28125,-1.29939l-2.447655,2.473608l0.620152,0.582143l0.612164,0.607972a1.530908,1.522909 0 0 0 -0.031957,0.456971a2.067176,2.056373 0 0 0 0.108852,0.509624a2.568491,2.555067 0 0 0 0.266635,0.543398a3.258548,3.24152 0 0 0 0.452384,0.552339l3.470255,3.452124a0.456375,0.45399 0 0 0 0.16178,0.107288a0.434406,0.432137 0 0 0 0.163777,0.024837a0.290604,0.289085 0 0 0 0.186745,-0.087421l0.170766,-0.168881a0.337538,0.335775 0 0 0 0.076895,-0.149014a0.354516,0.352664 0 0 0 -0.001997,-0.162919a0.41643,0.414254 0 0 0 -0.123832,-0.19471l-0.419426,-0.421208a0.128824,0.12815 0 0 1 -0.002995,-0.186764l0.083884,-0.067552a0.087881,0.087421 0 0 1 0.122833,0l0.639126,0.623866q0.31457,0.312925 0.558237,0.098348l0.169768,-0.169875a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.247661,0.246368 0 0 0 0.02996,-0.123185a0.367499,0.365577 0 0 0 -0.042941,-0.158946a0.742985,0.739103 0 0 0 -0.1468,-0.189742l-0.617156,-0.601018a0.136812,0.136098 0 0 1 -0.000998,-0.191729l0.061915,-0.062584a0.12483,0.124177 0 0 1 0.181752,0.002978l0.669086,0.678505c0.022968,0.023842 0.053924,0.053644 0.093872,0.089408a0.409441,0.4073 0 0 0 0.13182,0.082454a0.307578,0.305974 0 0 0 0.157783,0.018875a0.316567,0.314914 0 0 0 0.172763,-0.101329l0.215706,-0.214579a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.246662,0.245373 0 0 0 0.02996,-0.123185a0.372491,0.370545 0 0 0 -0.040944,-0.155965a0.575214,0.572208 0 0 0 -0.126827,-0.170867l-0.645117,-0.627841a0.170766,0.169875 0 0 1 0.000998,-0.2414l0.023967,-0.026821a0.13981,0.139079 0 0 1 0.203722,0.005959l0.542259,0.550355c0.01498,0.0149 0.039945,0.039737 0.077893,0.073511a0.524283,0.521545 0 0 0 0.132818,0.087421a0.346528,0.344716 0 0 0 0.166772,0.030796a0.292601,0.291071 0 0 0 0.183749,-0.098348l0.170766,-0.169875a0.345529,0.343721 0 0 0 0.047936,-0.069538a0.247661,0.246368 0 0 0 0.028959,-0.123185l0.000998,0.000995zm1.469992,-3.992541l-2.436669,-2.423936l-0.903766,0.899041a6.477148,6.443301 0 0 0 -0.958689,-0.126163a3.223595,3.206748 0 0 0 -0.543257,0.014902a2.025231,2.01465 0 0 0 -0.512301,0.126163a1.252288,1.245745 0 0 0 -0.432409,0.280145l-1.172398,1.167264l-0.001997,0.001986a0.542259,0.539425 0 0 0 -0.11684,0.197691l-0.000998,0.004967a0.469358,0.466906 0 0 0 -0.015979,0.208617a0.442396,0.440083 0 0 0 0.137811,0.246365l0.169768,0.168881a0.419428,0.417235 0 0 0 0.184748,0.096362l0.003997,0.000995a0.414433,0.412268 0 0 0 0.197728,-0.004967a0.500317,0.497702 0 0 0 0.227688,-0.144047l1.042576,-1.037125a0.344528,0.342729 0 0 1 0.486335,0l2.987916,2.977269l0.039945,0.039737l0.079893,-0.11921a2.51756,2.504404 0 0 0 0.260644,-0.530485a2.057188,2.046438 0 0 0 0.106852,-0.50267a1.69768,1.688809 0 0 0 0,-0.252327a0.340534,0.338756 0 0 1 0.019973,-0.144047l1.14943,-1.145408zm-3.107752,4.833965l0.003994,-0.002978a0.374488,0.372531 0 0 1 -0.034953,0.021853a0.442396,0.440083 0 0 1 0.030959,-0.019867l0,0.000992z'
												id='svg_12' fill='#6fcf97' />
								</g>
							</g>
						</svg>
					</div>
					<p className='ml-3 text-sm xl:text-base'>После того, как алгоритмы Explore Together подберут вам партнёра,
						вам на почту придёт уведомление. Перейдя по ссылке в уведомлении или нажав на вкладку меню сайта "Диалоги",
					вы сможете открыть диалог с участниками ваших запросов на поиск партнёров.</p>
				</div>
				<div className='md:w-8/12 w-11/12 mt-4 flex  flex-col md:flex-row place-content-between items-center rounded-md bg-black text-white
				 text-xl  py-3 px-5 xl:py-4 border border-gray'>
					<p className='text-sm xl:text-lg'>Какая помощь предоставляется веб-приложением для организации совместной учебной деятельности?</p>
					<button onClick={
						()=> {
							setAnswers({ ...answers, third: !answers.third})
						}
					}
									className='text-light-green md:ml-7 p-2 hover:text-dark-green'><IconContext.Provider
						value={{ size: '1.5em' }}>
						{
							!answers.third ? <IoIosArrowDown/> : <IoIosArrowUp/>
						}
					</IconContext.Provider></button>
				</div>
				<div className={clsx('md:w-7/12 w-10/12 flex flex-col md:flex-row place-content-between items-center rounded-b-md ' +
					'bg-dark-gray text-white text-xl py-3 px-5 xl:py-4', !answers.third && 'hidden')}>
					<div className='md:pr-2 md:mt-0 mb-3'>
						<svg width='35' height='35' xmlns='http://www.w3.org/2000/svg'>
							<g>
								<title>background</title>
								<rect x='-1' y='-1' width='37' height='37' id='canvas_background' fill='none' />
								<g id='canvasGrid' display='none'>
									<rect id='svg_1' width='100%' height='100%' x='0' y='0' strokeWidth='0' fill='url(#gridpattern)' />
								</g>
							</g>

							<g>
								<title>Layer 1</title>
								<g stroke='null' id='svg_8'>
									<g stroke='null' id='svg_5'
										 transform='matrix(0.10722499090069627,0,0,0.10841878701443147,-79.57733733744611,-47.30615232197317) '>
										<path stroke='null' id='svg_6'
													d='m1053.101555,689.974558l-53.462,-53.462a28.306,28.306 0 0 0 -38.278,-1.617l-17.409,-17.408a107.7,107.7 0 1 0 -17.134,17.132l17.408,17.409a28.3,28.3 0 0 0 1.618,38.276l53.463,53.461a28.319,28.319 0 0 0 40.046,0l13.747,-13.747a28.314,28.314 0 0 0 0,-40.044l0.001,0zm-252.422,-80.573a83.479,83.479 0 1 1 59.026,24.448a82.932,82.932 0 0 1 -59.026,-24.448zm235.29,103.485l-13.747,13.745a4.088,4.088 0 0 1 -5.78,0l-53.465,-53.462a4.085,4.085 0 0 1 0,-5.777l13.748,-13.749a4.091,4.091 0 0 1 5.78,0l53.463,53.462a4.087,4.087 0 0 1 0,5.778l0.001,0.003z'
													fill='#40936b' />
									</g>
								</g>
								<g stroke='null' id='svg_11'>
									<path stroke='null'
												d='m20.541593,12.461958a7.906194,7.864881 0 1 1 -7.906196,-7.864879a7.906194,7.864881 0 0 1 7.906196,7.864879zm-4.114379,2.345458a0.47635,0.47386 0 0 0 -0.035951,-0.1659a0.583202,0.580157 0 0 0 -0.139808,-0.195704l-0.383477,-0.382463l-0.110846,-0.108283l-0.002,-0.001986l-2.458638,-2.447779l-0.002995,-0.004967l-0.284613,-0.283126l-0.799905,0.795728a1.170401,1.164283 0 0 1 -0.547254,0.323854a1.096502,1.090772 0 0 1 -1.007623,-0.242395l-0.009985,-0.009935l-0.016977,-0.0149l-0.174763,-0.173848a1.108484,1.102693 0 0 1 -0.332543,-0.636779a1.146432,1.140443 0 0 1 0.041942,-0.51161a1.224328,1.21793 0 0 1 0.260644,-0.449026l0.007988,-0.009932l0.012983,-0.012916l0.592191,-0.589097l-1.28125,-1.29939l-2.447655,2.473608l0.620152,0.582143l0.612164,0.607972a1.530908,1.522909 0 0 0 -0.031957,0.456971a2.067176,2.056373 0 0 0 0.108852,0.509624a2.568491,2.555067 0 0 0 0.266635,0.543398a3.258548,3.24152 0 0 0 0.452384,0.552339l3.470255,3.452124a0.456375,0.45399 0 0 0 0.16178,0.107288a0.434406,0.432137 0 0 0 0.163777,0.024837a0.290604,0.289085 0 0 0 0.186745,-0.087421l0.170766,-0.168881a0.337538,0.335775 0 0 0 0.076895,-0.149014a0.354516,0.352664 0 0 0 -0.001997,-0.162919a0.41643,0.414254 0 0 0 -0.123832,-0.19471l-0.419426,-0.421208a0.128824,0.12815 0 0 1 -0.002995,-0.186764l0.083884,-0.067552a0.087881,0.087421 0 0 1 0.122833,0l0.639126,0.623866q0.31457,0.312925 0.558237,0.098348l0.169768,-0.169875a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.247661,0.246368 0 0 0 0.02996,-0.123185a0.367499,0.365577 0 0 0 -0.042941,-0.158946a0.742985,0.739103 0 0 0 -0.1468,-0.189742l-0.617156,-0.601018a0.136812,0.136098 0 0 1 -0.000998,-0.191729l0.061915,-0.062584a0.12483,0.124177 0 0 1 0.181752,0.002978l0.669086,0.678505c0.022968,0.023842 0.053924,0.053644 0.093872,0.089408a0.409441,0.4073 0 0 0 0.13182,0.082454a0.307578,0.305974 0 0 0 0.157783,0.018875a0.316567,0.314914 0 0 0 0.172763,-0.101329l0.215706,-0.214579a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.246662,0.245373 0 0 0 0.02996,-0.123185a0.372491,0.370545 0 0 0 -0.040944,-0.155965a0.575214,0.572208 0 0 0 -0.126827,-0.170867l-0.645117,-0.627841a0.170766,0.169875 0 0 1 0.000998,-0.2414l0.023967,-0.026821a0.13981,0.139079 0 0 1 0.203722,0.005959l0.542259,0.550355c0.01498,0.0149 0.039945,0.039737 0.077893,0.073511a0.524283,0.521545 0 0 0 0.132818,0.087421a0.346528,0.344716 0 0 0 0.166772,0.030796a0.292601,0.291071 0 0 0 0.183749,-0.098348l0.170766,-0.169875a0.345529,0.343721 0 0 0 0.047936,-0.069538a0.247661,0.246368 0 0 0 0.028959,-0.123185l0.000998,0.000995zm1.469992,-3.992541l-2.436669,-2.423936l-0.903766,0.899041a6.477148,6.443301 0 0 0 -0.958689,-0.126163a3.223595,3.206748 0 0 0 -0.543257,0.014902a2.025231,2.01465 0 0 0 -0.512301,0.126163a1.252288,1.245745 0 0 0 -0.432409,0.280145l-1.172398,1.167264l-0.001997,0.001986a0.542259,0.539425 0 0 0 -0.11684,0.197691l-0.000998,0.004967a0.469358,0.466906 0 0 0 -0.015979,0.208617a0.442396,0.440083 0 0 0 0.137811,0.246365l0.169768,0.168881a0.419428,0.417235 0 0 0 0.184748,0.096362l0.003997,0.000995a0.414433,0.412268 0 0 0 0.197728,-0.004967a0.500317,0.497702 0 0 0 0.227688,-0.144047l1.042576,-1.037125a0.344528,0.342729 0 0 1 0.486335,0l2.987916,2.977269l0.039945,0.039737l0.079893,-0.11921a2.51756,2.504404 0 0 0 0.260644,-0.530485a2.057188,2.046438 0 0 0 0.106852,-0.50267a1.69768,1.688809 0 0 0 0,-0.252327a0.340534,0.338756 0 0 1 0.019973,-0.144047l1.14943,-1.145408zm-3.107752,4.833965l0.003994,-0.002978a0.374488,0.372531 0 0 1 -0.034953,0.021853a0.442396,0.440083 0 0 1 0.030959,-0.019867l0,0.000992z'
												id='svg_12' fill='#6fcf97' />
								</g>
							</g>
						</svg>
					</div>
					<p className='ml-3 text-sm xl:text-base'>Explore Together не оказывает услуги по организации учебно-познавательных занятий,
					данное веб-приложение нацелено только на поиск партнёров и первичную коммуникацию с ними.
						Для организации встреч и обучения вы можете использовать такие инструменты как Zoom, Google Meet, Notion, Trello.</p>
				</div>
				<div className='md:w-8/12 w-11/12 mt-4 flex flex-col md:flex-row place-content-between items-center rounded-md bg-black text-white
				 text-xl  py-3 px-5 xl:py-4 border border-gray'>
					<p className='text-sm xl:text-lg'>Какая информация обо мне будет доступна для других пользователей при поиске партнеров для
						совместного обучения?</p>
					<button onClick={
						()=> {
							setAnswers({ ...answers, forth: !answers.forth})
						}
					}
									className='text-light-green md:ml-7 p-2 hover:text-dark-green'><IconContext.Provider
						value={{ size: '1.5em' }}>
						{
							!answers.forth ? <IoIosArrowDown/> : <IoIosArrowUp/>
						}
					</IconContext.Provider></button>
				</div>
				<div className={clsx('md:w-7/12 w-10/12 flex flex-col md:flex-row place-content-between items-center rounded-b-md ' +
					'bg-dark-gray text-white text-xl py-3 px-5 xl:py-5', !answers.forth && 'hidden')}>
					<div className='md:pr-2 md:mt-0 mb-3'>
						<svg width='35' height='35' xmlns='http://www.w3.org/2000/svg'>
							<g>
								<title>background</title>
								<rect x='-1' y='-1' width='37' height='37' id='canvas_background' fill='none' />
								<g id='canvasGrid' display='none'>
									<rect id='svg_1' width='100%' height='100%' x='0' y='0' strokeWidth='0' fill='url(#gridpattern)' />
								</g>
							</g>

							<g>
								<title>Layer 1</title>
								<g stroke='null' id='svg_8'>
									<g stroke='null' id='svg_5'
										 transform='matrix(0.10722499090069627,0,0,0.10841878701443147,-79.57733733744611,-47.30615232197317) '>
										<path stroke='null' id='svg_6'
													d='m1053.101555,689.974558l-53.462,-53.462a28.306,28.306 0 0 0 -38.278,-1.617l-17.409,-17.408a107.7,107.7 0 1 0 -17.134,17.132l17.408,17.409a28.3,28.3 0 0 0 1.618,38.276l53.463,53.461a28.319,28.319 0 0 0 40.046,0l13.747,-13.747a28.314,28.314 0 0 0 0,-40.044l0.001,0zm-252.422,-80.573a83.479,83.479 0 1 1 59.026,24.448a82.932,82.932 0 0 1 -59.026,-24.448zm235.29,103.485l-13.747,13.745a4.088,4.088 0 0 1 -5.78,0l-53.465,-53.462a4.085,4.085 0 0 1 0,-5.777l13.748,-13.749a4.091,4.091 0 0 1 5.78,0l53.463,53.462a4.087,4.087 0 0 1 0,5.778l0.001,0.003z'
													fill='#40936b' />
									</g>
								</g>
								<g stroke='null' id='svg_11'>
									<path stroke='null'
												d='m20.541593,12.461958a7.906194,7.864881 0 1 1 -7.906196,-7.864879a7.906194,7.864881 0 0 1 7.906196,7.864879zm-4.114379,2.345458a0.47635,0.47386 0 0 0 -0.035951,-0.1659a0.583202,0.580157 0 0 0 -0.139808,-0.195704l-0.383477,-0.382463l-0.110846,-0.108283l-0.002,-0.001986l-2.458638,-2.447779l-0.002995,-0.004967l-0.284613,-0.283126l-0.799905,0.795728a1.170401,1.164283 0 0 1 -0.547254,0.323854a1.096502,1.090772 0 0 1 -1.007623,-0.242395l-0.009985,-0.009935l-0.016977,-0.0149l-0.174763,-0.173848a1.108484,1.102693 0 0 1 -0.332543,-0.636779a1.146432,1.140443 0 0 1 0.041942,-0.51161a1.224328,1.21793 0 0 1 0.260644,-0.449026l0.007988,-0.009932l0.012983,-0.012916l0.592191,-0.589097l-1.28125,-1.29939l-2.447655,2.473608l0.620152,0.582143l0.612164,0.607972a1.530908,1.522909 0 0 0 -0.031957,0.456971a2.067176,2.056373 0 0 0 0.108852,0.509624a2.568491,2.555067 0 0 0 0.266635,0.543398a3.258548,3.24152 0 0 0 0.452384,0.552339l3.470255,3.452124a0.456375,0.45399 0 0 0 0.16178,0.107288a0.434406,0.432137 0 0 0 0.163777,0.024837a0.290604,0.289085 0 0 0 0.186745,-0.087421l0.170766,-0.168881a0.337538,0.335775 0 0 0 0.076895,-0.149014a0.354516,0.352664 0 0 0 -0.001997,-0.162919a0.41643,0.414254 0 0 0 -0.123832,-0.19471l-0.419426,-0.421208a0.128824,0.12815 0 0 1 -0.002995,-0.186764l0.083884,-0.067552a0.087881,0.087421 0 0 1 0.122833,0l0.639126,0.623866q0.31457,0.312925 0.558237,0.098348l0.169768,-0.169875a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.247661,0.246368 0 0 0 0.02996,-0.123185a0.367499,0.365577 0 0 0 -0.042941,-0.158946a0.742985,0.739103 0 0 0 -0.1468,-0.189742l-0.617156,-0.601018a0.136812,0.136098 0 0 1 -0.000998,-0.191729l0.061915,-0.062584a0.12483,0.124177 0 0 1 0.181752,0.002978l0.669086,0.678505c0.022968,0.023842 0.053924,0.053644 0.093872,0.089408a0.409441,0.4073 0 0 0 0.13182,0.082454a0.307578,0.305974 0 0 0 0.157783,0.018875a0.316567,0.314914 0 0 0 0.172763,-0.101329l0.215706,-0.214579a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.246662,0.245373 0 0 0 0.02996,-0.123185a0.372491,0.370545 0 0 0 -0.040944,-0.155965a0.575214,0.572208 0 0 0 -0.126827,-0.170867l-0.645117,-0.627841a0.170766,0.169875 0 0 1 0.000998,-0.2414l0.023967,-0.026821a0.13981,0.139079 0 0 1 0.203722,0.005959l0.542259,0.550355c0.01498,0.0149 0.039945,0.039737 0.077893,0.073511a0.524283,0.521545 0 0 0 0.132818,0.087421a0.346528,0.344716 0 0 0 0.166772,0.030796a0.292601,0.291071 0 0 0 0.183749,-0.098348l0.170766,-0.169875a0.345529,0.343721 0 0 0 0.047936,-0.069538a0.247661,0.246368 0 0 0 0.028959,-0.123185l0.000998,0.000995zm1.469992,-3.992541l-2.436669,-2.423936l-0.903766,0.899041a6.477148,6.443301 0 0 0 -0.958689,-0.126163a3.223595,3.206748 0 0 0 -0.543257,0.014902a2.025231,2.01465 0 0 0 -0.512301,0.126163a1.252288,1.245745 0 0 0 -0.432409,0.280145l-1.172398,1.167264l-0.001997,0.001986a0.542259,0.539425 0 0 0 -0.11684,0.197691l-0.000998,0.004967a0.469358,0.466906 0 0 0 -0.015979,0.208617a0.442396,0.440083 0 0 0 0.137811,0.246365l0.169768,0.168881a0.419428,0.417235 0 0 0 0.184748,0.096362l0.003997,0.000995a0.414433,0.412268 0 0 0 0.197728,-0.004967a0.500317,0.497702 0 0 0 0.227688,-0.144047l1.042576,-1.037125a0.344528,0.342729 0 0 1 0.486335,0l2.987916,2.977269l0.039945,0.039737l0.079893,-0.11921a2.51756,2.504404 0 0 0 0.260644,-0.530485a2.057188,2.046438 0 0 0 0.106852,-0.50267a1.69768,1.688809 0 0 0 0,-0.252327a0.340534,0.338756 0 0 1 0.019973,-0.144047l1.14943,-1.145408zm-3.107752,4.833965l0.003994,-0.002978a0.374488,0.372531 0 0 1 -0.034953,0.021853a0.442396,0.440083 0 0 1 0.030959,-0.019867l0,0.000992z'
												id='svg_12' fill='#6fcf97' />
								</g>
							</g>
						</svg>
					</div>
					<p className='ml-3 text-sm xl:text-base'>Ваши партнёры могут видеть такие данные о вас как имя, пол, социальная сеть и инфо,
						если эти данные были указаны вами ранее. Пользователи, не являющиеся вашими партнёрами, не могут просматривать информацию о вас.</p>
				</div>
				<div className='md:w-8/12 w-11/12 mt-4 flex flex-col md:flex-row place-content-between items-center rounded-md bg-black text-white
				 text-xl  py-3 px-5 xl:py-4 border border-gray'>
					<p className='text-sm xl:text-lg'>Является ли это приложение бесплатным, или существуют какие-либо платные услуги и
						ограничения на бесплатное использование?</p>
					<button onClick={
						()=> {
							setAnswers({ ...answers, fifth: !answers.fifth})
						}
					}
									className='text-light-green md:ml-7 p-2 hover:text-dark-green'><IconContext.Provider
						value={{ size: '1.5em' }}>
						{
							!answers.fifth ? <IoIosArrowDown/> : <IoIosArrowUp/>
						}
					</IconContext.Provider></button>
				</div>
				<div className={clsx('md:w-7/12 w-10/12 flex flex-col md:flex-row place-content-between items-center rounded-b-md ' +
					'bg-dark-gray text-white text-xl py-3 px-5 xl:py-5', !answers.fifth && 'hidden')}>
					<div className='md:pr-2 md:mt-0 mb-3'>
						<svg width='35' height='35' xmlns='http://www.w3.org/2000/svg'>
							<g>
								<title>background</title>
								<rect x='-1' y='-1' width='37' height='37' id='canvas_background' fill='none' />
								<g id='canvasGrid' display='none'>
									<rect id='svg_1' width='100%' height='100%' x='0' y='0' strokeWidth='0' fill='url(#gridpattern)' />
								</g>
							</g>

							<g>
								<title>Layer 1</title>
								<g stroke='null' id='svg_8'>
									<g stroke='null' id='svg_5'
										 transform='matrix(0.10722499090069627,0,0,0.10841878701443147,-79.57733733744611,-47.30615232197317) '>
										<path stroke='null' id='svg_6'
													d='m1053.101555,689.974558l-53.462,-53.462a28.306,28.306 0 0 0 -38.278,-1.617l-17.409,-17.408a107.7,107.7 0 1 0 -17.134,17.132l17.408,17.409a28.3,28.3 0 0 0 1.618,38.276l53.463,53.461a28.319,28.319 0 0 0 40.046,0l13.747,-13.747a28.314,28.314 0 0 0 0,-40.044l0.001,0zm-252.422,-80.573a83.479,83.479 0 1 1 59.026,24.448a82.932,82.932 0 0 1 -59.026,-24.448zm235.29,103.485l-13.747,13.745a4.088,4.088 0 0 1 -5.78,0l-53.465,-53.462a4.085,4.085 0 0 1 0,-5.777l13.748,-13.749a4.091,4.091 0 0 1 5.78,0l53.463,53.462a4.087,4.087 0 0 1 0,5.778l0.001,0.003z'
													fill='#40936b' />
									</g>
								</g>
								<g stroke='null' id='svg_11'>
									<path stroke='null'
												d='m20.541593,12.461958a7.906194,7.864881 0 1 1 -7.906196,-7.864879a7.906194,7.864881 0 0 1 7.906196,7.864879zm-4.114379,2.345458a0.47635,0.47386 0 0 0 -0.035951,-0.1659a0.583202,0.580157 0 0 0 -0.139808,-0.195704l-0.383477,-0.382463l-0.110846,-0.108283l-0.002,-0.001986l-2.458638,-2.447779l-0.002995,-0.004967l-0.284613,-0.283126l-0.799905,0.795728a1.170401,1.164283 0 0 1 -0.547254,0.323854a1.096502,1.090772 0 0 1 -1.007623,-0.242395l-0.009985,-0.009935l-0.016977,-0.0149l-0.174763,-0.173848a1.108484,1.102693 0 0 1 -0.332543,-0.636779a1.146432,1.140443 0 0 1 0.041942,-0.51161a1.224328,1.21793 0 0 1 0.260644,-0.449026l0.007988,-0.009932l0.012983,-0.012916l0.592191,-0.589097l-1.28125,-1.29939l-2.447655,2.473608l0.620152,0.582143l0.612164,0.607972a1.530908,1.522909 0 0 0 -0.031957,0.456971a2.067176,2.056373 0 0 0 0.108852,0.509624a2.568491,2.555067 0 0 0 0.266635,0.543398a3.258548,3.24152 0 0 0 0.452384,0.552339l3.470255,3.452124a0.456375,0.45399 0 0 0 0.16178,0.107288a0.434406,0.432137 0 0 0 0.163777,0.024837a0.290604,0.289085 0 0 0 0.186745,-0.087421l0.170766,-0.168881a0.337538,0.335775 0 0 0 0.076895,-0.149014a0.354516,0.352664 0 0 0 -0.001997,-0.162919a0.41643,0.414254 0 0 0 -0.123832,-0.19471l-0.419426,-0.421208a0.128824,0.12815 0 0 1 -0.002995,-0.186764l0.083884,-0.067552a0.087881,0.087421 0 0 1 0.122833,0l0.639126,0.623866q0.31457,0.312925 0.558237,0.098348l0.169768,-0.169875a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.247661,0.246368 0 0 0 0.02996,-0.123185a0.367499,0.365577 0 0 0 -0.042941,-0.158946a0.742985,0.739103 0 0 0 -0.1468,-0.189742l-0.617156,-0.601018a0.136812,0.136098 0 0 1 -0.000998,-0.191729l0.061915,-0.062584a0.12483,0.124177 0 0 1 0.181752,0.002978l0.669086,0.678505c0.022968,0.023842 0.053924,0.053644 0.093872,0.089408a0.409441,0.4073 0 0 0 0.13182,0.082454a0.307578,0.305974 0 0 0 0.157783,0.018875a0.316567,0.314914 0 0 0 0.172763,-0.101329l0.215706,-0.214579a0.407444,0.405314 0 0 0 0.065909,-0.087419a0.246662,0.245373 0 0 0 0.02996,-0.123185a0.372491,0.370545 0 0 0 -0.040944,-0.155965a0.575214,0.572208 0 0 0 -0.126827,-0.170867l-0.645117,-0.627841a0.170766,0.169875 0 0 1 0.000998,-0.2414l0.023967,-0.026821a0.13981,0.139079 0 0 1 0.203722,0.005959l0.542259,0.550355c0.01498,0.0149 0.039945,0.039737 0.077893,0.073511a0.524283,0.521545 0 0 0 0.132818,0.087421a0.346528,0.344716 0 0 0 0.166772,0.030796a0.292601,0.291071 0 0 0 0.183749,-0.098348l0.170766,-0.169875a0.345529,0.343721 0 0 0 0.047936,-0.069538a0.247661,0.246368 0 0 0 0.028959,-0.123185l0.000998,0.000995zm1.469992,-3.992541l-2.436669,-2.423936l-0.903766,0.899041a6.477148,6.443301 0 0 0 -0.958689,-0.126163a3.223595,3.206748 0 0 0 -0.543257,0.014902a2.025231,2.01465 0 0 0 -0.512301,0.126163a1.252288,1.245745 0 0 0 -0.432409,0.280145l-1.172398,1.167264l-0.001997,0.001986a0.542259,0.539425 0 0 0 -0.11684,0.197691l-0.000998,0.004967a0.469358,0.466906 0 0 0 -0.015979,0.208617a0.442396,0.440083 0 0 0 0.137811,0.246365l0.169768,0.168881a0.419428,0.417235 0 0 0 0.184748,0.096362l0.003997,0.000995a0.414433,0.412268 0 0 0 0.197728,-0.004967a0.500317,0.497702 0 0 0 0.227688,-0.144047l1.042576,-1.037125a0.344528,0.342729 0 0 1 0.486335,0l2.987916,2.977269l0.039945,0.039737l0.079893,-0.11921a2.51756,2.504404 0 0 0 0.260644,-0.530485a2.057188,2.046438 0 0 0 0.106852,-0.50267a1.69768,1.688809 0 0 0 0,-0.252327a0.340534,0.338756 0 0 1 0.019973,-0.144047l1.14943,-1.145408zm-3.107752,4.833965l0.003994,-0.002978a0.374488,0.372531 0 0 1 -0.034953,0.021853a0.442396,0.440083 0 0 1 0.030959,-0.019867l0,0.000992z'
												id='svg_12' fill='#6fcf97' />
								</g>
							</g>
						</svg>
					</div>
					<p className='ml-3 text-sm xl:text-base'>На данный момент веб-приложение полностью бесплатно и не устанавливает
						ограничений для пользователей, однако в будущем планируется расширить проект и добавить функции,
						доступные только по подписке.</p>
				</div>

				{
					userStore.isAuth ? <form className='my-10 w-11/12 md:w-8/12'>
						<label htmlFor="chat" className="sr-only">Задайте ваш вопрос</label>
						<div className="flex items-center px-3 py-2 text-white rounded-lg bg-dark-gray">
						<textarea id="chat" rows="1" value={question} onChange={(e)=>setQuestion(e.target.value)}
											className="block mx-4 p-2.5 w-full text-sm bg-black rounded-lg border
											border-gray focus:ring-2 focus:ring-light-green focus:border-none placeholder-gray focus:outline-none"
											placeholder="Задайте ваш вопрос..."></textarea>
							<button type="button" onClick={()=>{
							createQuestions(userStore.user.id,question).then(r=> {
								setQuestion('')
								Toast('ok','Успешно!', r.message)
							})
							}
							}
											className="inline-flex justify-center p-2 text-dark-green rounded-full cursor-pointer hover:bg-black">
								<svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20"
										 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
								</svg>
								<span className="sr-only">Send message</span>
							</button>
						</div>
					</form>
						: <p className='my-10 text-white text-xl text-center'>
							<Link to='/' className='underline' onClick={()=>userStore.setIsLogin(true)}>Войдите</Link> или
							<Link to='/' className='underline' onClick={()=>userStore.setIsLogin(false)}> Зарегистрируйтесь</Link>, чтобы задать свой вопрос.
						</p>
				}
			</div>
		</Layout>
	)
}

export default Questions