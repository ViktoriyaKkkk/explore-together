import { createContext, useContext } from 'react'
import LoginStore from '../store/LoginStore'

const AppContext = createContext()
export const AppWrapper = ({children}) => {
	return (
<AppContext.Provider value={{
	userStore: new LoginStore()
}}>
	{children}
</AppContext.Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}

