import { createContext, useContext } from 'react'
import LoginStore from '@/store/LoginStore'

const AppContext = createContext()
export const AppWrapper = ({children}) => {
	return (
<AppContext.Provider value={{
	isLoginStore: new LoginStore()
}}>
	{children}
</AppContext.Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}

