import React, { useEffect, useMemo, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '../context/AppContext'
import { useTopics } from '../utils/useTopics'
import { useSections } from '../utils/useSections'
import { useLevels } from '../utils/useLevels'
import { useDurations } from '../utils/useDurations'
import { usePeriodicities } from '../utils/usePeriodicities'
import { useTimes } from '../utils/useTimes'
import { useFormats } from '../utils/useFormat'
import { useCities } from '../utils/useCities'
import { useAges } from '../utils/useAges'
import { createSearch } from '../api/api.search'
import { useValidation } from '../utils/useValidation'
import { readCities } from '../api/api.city'
import { clsx } from 'clsx'


const Main = observer(() => {

	const { userStore } = useAppContext()

	const [searchName, setSearchName] = useState('')
	const [nameErr, validateName] = useValidation(searchName, { isEmpty: true })
	const [bluredName, setBluredName] = useState(false)

	const [topics, errorTopic] = useTopics()
	const [selectedTopic, setSelectedTopic] = useState(0)
	const [topicErr, validateTopic] = useValidation(selectedTopic, { isZero: true })
	const [bluredTopic, setBluredTopic] = useState(false)

	const [sections, errorSection] = useSections()
	const bundlOfSections = useMemo(() => {
		if (selectedTopic !== 0) {
			return sections.filter((section) => {
				return section.topicId === selectedTopic
			})
		}
		return sections
	}, [selectedTopic, sections])
	const [selectedSection, setSelectedSection] = useState(0)
	const [sectionErr, validateSection] = useValidation(selectedSection, { isZero: true })
	const [bluredSection, setBluredSection] = useState(false)

	const [levels, errorLevel] = useLevels()
	const bundlOfLevels = useMemo(() => {
		if (selectedSection !== 0) {
			return levels.filter((level) => {
				return level.sectionId === selectedSection
			})
		}
		return levels
	}, [selectedSection, levels])
	const [selectedLevel, setSelectedLevel] = useState(0)
	const [levelErr, validateLevel] = useValidation(selectedLevel, { isZero: true })
	const [bluredLevel, setBluredLevel] = useState(false)

	const [selectedDuration, setSelectedDuration] = useState(0)
	const [durations, errorDuration] = useDurations()
	const [durationErr, validateDuration] = useValidation(selectedDuration, { isZero: true })
	const [bluredDuration, setBluredDuration] = useState(false)

	const [periodicities, errorPeriodicity] = usePeriodicities()
	const [selectedPeriodicity, setSelectedPeriodicity] = useState(0)
	const [periodicityErr, validatePeriodicity] = useValidation(selectedPeriodicity, { isZero: true })
	const [bluredPeriodicity, setBluredPeriodicity] = useState(false)

	const [times, errorTime] = useTimes()
	const [selectedTime, setSelectedTime] = useState(0)
	const [timeErr, validateTime] = useValidation(selectedTime, { isZero: true })
	const [bluredTime, setBluredTime] = useState(false)

	const [formats, errorFormat] = useFormats()
	const [selectedFormat, setSelectedFormat] = useState(0)
	const [formatErr, validateFormat] = useValidation(selectedFormat, { isZero: true })
	const [bluredFormat, setBluredFormat] = useState(false)

	const [cities, errorCity] = useCities()
	const citiesByName = useMemo(() => {
		return cities?.reduce((prev, curr) => {
			return { ...prev, [curr.name]: curr._id }
		}, {})
	}, [cities])

	const [selectedCity, setSelectedCity] = useState(0)
	let [cityErr, validateCity] = useValidation(selectedCity, { isZero: true })
	const [bluredCity, setBluredCity] = useState(false)

	useEffect(() => {
		if (selectedFormat !== '641e114f2945eabd89d70189' && bluredFormat) {
			setSelectedCity(0)
		}
	}, [selectedFormat, bluredFormat])

	const [selectedNumberOfPeople, setSelectedNumberOFPeople] = useState(' ')

	const [selectedParticipantsGender, setSelectedParticipantsGender] = useState('')

	const [ages, errorAge] = useAges()
	const [selectedAges, setSelectedAges] = useState(0)
	const [ageErr, validateAge] = useValidation(selectedAges, { isZero: true })
	const [bluredAge, setBluredAge] = useState(false)

	const startSearch = () => {
		let params = [searchName, selectedLevel, selectedDuration, selectedPeriodicity, selectedTime, selectedFormat, selectedAges, selectedCity, selectedNumberOfPeople]
		// if (selectedCity!==0) {
		// 	params = [...params, selectedCity]
		// }
		// if (selectedNumberOfPeople!=='') {
		// 	params = [...params, selectedNumberOfPeople]
		// }
		if (selectedParticipantsGender === '') {
			params = [...params, 'Любой']
		} else {
			params = [...params, selectedParticipantsGender]
		}
		// console.log(...params)
		createSearch(...params).then((data) => alert(data))
		// console.log(params)
	}

	useMemo(() => {
		if (Object.keys(citiesByName) !== 0 && localStorage.getItem('city') && selectedFormat === '641e114f2945eabd89d70189') {
			setSelectedCity(citiesByName[localStorage.getItem('city')])
			// console.log(citiesByName[localStorage.getItem('city')])
			// console.log(selectedCity)
		} else {
			// console.log('name',citiesByName)
		}
	}, [citiesByName, selectedFormat])

	return (<>
			<div className="absolute w-full -z-20 h-screen bg-black">
			</div>
			<div className="absolute w-full -z-10 h-screen [mask-image:linear-gradient(0deg,black,transparent)] bg-repeat bg-[url('../../public/img/bggrid2.svg')] ">
			</div>
			<div
				className="flex h-screen pt-14 flex-wrap align-middle">
				<section className='max-w-4xl self-center p-6 my-auto mx-auto rounded-md shadow-md bg-black drop-shadow-[0_0_35px_rgba(64,147,107,0.9)]'>
					<h2 className='block text-center font-bold text-2xl lg:text-3xl text-white'>Создание запроса на поиск
						партнеров</h2>
					<form>
						<div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
							<div>
								<label className='block text-xl text-white' htmlFor='username'>Название запроса</label>
								<input value={searchName} onChange={e => setSearchName(e.target.value)}
											 onBlur={e => {
												 setBluredName(true)
												 validateName()
											 }}
											 placeholder={'Название запроса на поиск'}
											 id='name' type='text'
											 className={clsx('placeholder-light-gray block w-full px-4 py-2 mt-2 text-white bg-black border ' +
												 'border-gray rounded-md focus:ring-2 ' +
												 'focus:ring-light-green focus:outline-none', nameErr && bluredName && 'ring-2 border-none ring-red focus:ring-red')} />
								{
									nameErr && bluredName && <p className='absolute text-red'>{nameErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Тематика</label>
								<select value={selectedTopic} onChange={e => setSelectedTopic(e.target.value)}
												onBlur={e => {
													setBluredTopic(true)
													validateTopic()
												}}
												className={clsx('block w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none', topicErr && bluredTopic && 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value={0}>Выберите тему</option>
									{
										topics.map((topic) => {
											return <option value={topic._id} key={topic._id}>{topic.name}</option>
										})
									}
								</select>
								{
									topicErr && bluredTopic && <p className='absolute text-red'>{topicErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Раздел</label>
								<select disabled={!selectedTopic} value={selectedSection}
												onChange={(e) => setSelectedSection(e.target.value)}
												onBlur={e => {
													setBluredSection(true)
													validateSection()
												}}
												className={clsx('block disabled:cursor-not-allowed  disabled:text-gray w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none', sectionErr && bluredSection && 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value='0'>Выберите раздел</option>
									{
										bundlOfSections?.map((section) => {
											return <option value={section._id} key={section._id}>{section.name}</option>
										})
									}
								</select>
								{
									sectionErr && bluredSection && <p className='absolute text-red'>{sectionErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Уровень</label>
								<select disabled={!selectedSection} value={selectedLevel}
												onChange={(e) => setSelectedLevel(e.target.value)}
												onBlur={e => {
													setBluredLevel(true)
													validateLevel()
												}}
												className={clsx('block disabled:cursor-not-allowed disabled:text-gray w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none', levelErr && bluredLevel && 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value={0}>Выберите уровень</option>
									{
										bundlOfLevels?.map((level) => {
											return <option value={level._id} key={level._id}>{level.name}</option>
										})
									}
								</select>
								{
									levelErr && bluredLevel && <p className='absolute text-red'>{levelErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Длительность совместного
									обучения</label>
								<select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}
												onBlur={e => {
													setBluredDuration(true)
													validateDuration()
												}}
												className={clsx('block w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none', durationErr && bluredDuration && 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value={0}>Выберите длительность</option>
									{
										durations?.map((duration) => {
											return <option value={duration._id} key={duration._id}>{duration.name}</option>
										})
									}
								</select>
								{
									durationErr && bluredDuration && <p className='absolute text-red'>{durationErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Частота встреч</label>
								<select value={selectedPeriodicity} onChange={(e) => setSelectedPeriodicity(e.target.value)}
												onBlur={e => {
													setBluredPeriodicity(true)
													validatePeriodicity()
												}}
												className={clsx('block w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none', periodicityErr && bluredPeriodicity && 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value={0}>Выберите частоту</option>
									{
										periodicities?.map((item) => {
											return <option value={item._id} key={item._id}>{item.name}</option>
										})
									}
								</select>
								{
									periodicityErr && bluredPeriodicity && <p className='absolute text-red'>{periodicityErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Количество времени в
									день</label>
								<select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}
												onBlur={e => {
													setBluredTime(true)
													validateTime()
												}}
												className={clsx('block w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none', timeErr && bluredTime && 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value={0}>Выберите количество времени</option>
									{
										times?.map((item) => {
											return <option value={item._id} key={item._id}>{item.name}</option>
										})
									}
								</select>
								{
									timeErr && bluredTime && <p className='absolute text-red'>{timeErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Формат совместного
									обучения</label>
								<select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}
												onBlur={e => {
													setBluredFormat(true)
													validateFormat()
												}}
												className={clsx('block w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none', formatErr && bluredFormat && 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value={0}>Выберите формат</option>
									{
										formats?.map((item) => {
											return <option value={item._id} key={item._id}>{item.name}</option>
										})
									}
								</select>
								{
									formatErr && bluredFormat && <p className='absolute text-red'>{formatErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Город</label>
								<select disabled={selectedFormat !== '641e114f2945eabd89d70189'} value={selectedCity}
												onChange={(e) => setSelectedCity(e.target.value)}
												onBlur={e => {
													setBluredCity(true)
													validateCity()
												}}
												className={clsx('block disabled:cursor-not-allowed disabled:text-gray w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none', cityErr && bluredCity && selectedFormat === '641e114f2945eabd89d70189'
													&& 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value={0}>Выберите город</option>
									{
										cities?.map((item) => {
											return <option value={item._id} key={item._id}>{item.name}</option>
										})
									}
								</select>
								{
									cityErr && bluredCity && selectedFormat === '641e114f2945eabd89d70189' &&
									<p className='absolute text-red'>{cityErr}</p>
								}
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Число участников
									совместного обучения</label>
								<select value={selectedNumberOfPeople} onChange={(e) => setSelectedNumberOFPeople(e.target.value)}
												className='block w-full px-4 py-2 mt-2 text-white bg-black border border-gray rounded-md
											focus:border-dark-green focus:shadow-light-green focus:ring-2 focus:ring-light-green focus:outline-none'>
									<option value={' '}>Выберите число людей</option>
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={0}>Без ограничений</option>
								</select>
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Выберите пол
									участников</label>
								<select value={selectedParticipantsGender}
												onChange={(e) => setSelectedParticipantsGender(e.target.value)}
												className='block w-full px-4 py-2 mt-2 text-white bg-black border border-gray rounded-md
											focus:border-dark-green focus:shadow-light-green focus:ring-2 focus:ring-light-green focus:outline-none'>
									<option value={''}>Выберите пол участников</option>
									<option value={'Жен'}>Женский</option>
									<option value={'Муж'}>Мужской</option>
									<option value={'Любой'}>Не имеет значения</option>
								</select>
							</div>

							<div>
								<label className='block text-xl text-white' htmlFor='passwordConfirmation'>Выберите возрастной
									диапазон участников</label>
								<select value={selectedAges} onChange={(e) => setSelectedAges(e.target.value)}
												onBlur={e => {
													setBluredAge(true)
													validateAge()
												}}
												className={clsx('block w-full px-4 py-2 mt-2 text-white bg-black border ' +
													'border-gray rounded-md focus:border-dark-green focus:shadow-light-green focus:ring-2 ' +
													'focus:ring-light-green focus:outline-none ', ageErr && bluredAge && 'border-none ring-2 ring-red focus:ring-red')}>
									<option disabled={true} value={0}>Выберите возрастной диапазон</option>
									{
										ages?.map((item) => {
											return <option value={item._id} key={item._id}>{item.name}</option>
										})
									}
								</select>
								{
									ageErr && bluredAge && <p className='absolute text-red'>{ageErr}</p>
								}
							</div>

						</div>

						<div className='flex justify-center mt-6'>
							<button onClick={startSearch} type='button'
											disabled={nameErr || topicErr || sectionErr || levelErr || durationErr
												|| periodicityErr || timeErr || formatErr || (cityErr && selectedFormat === '641e114f2945eabd89d70189') || ageErr}
											className='px-6 disabled:cursor-not-allowed uppercase py-2 leading-5 text-white transition-colors duration-200 transform bg-dark-green rounded-md
							hover:bg-light-green focus:outline-none'>Начать поиск
							</button>
						</div>
					</form>
				</section>
			</div>
		</>
	)
})

export default Main