import { makeAutoObservable } from 'mobx'

export default class LoginStore {
	_isLogin = false
	_isAuth = false
	_user = {}
	constructor() {
		makeAutoObservable(this)
	}

	setUser(user){
		this._user = user
	}

	get user() {
		return this._user
	}
	setIsAuth(isAuth){
		this._isAuth = isAuth
	}

	get isAuth() {
		return this._isAuth
	}
	setIsLogin(isLogin){
		this._isLogin = isLogin
	}

	get isLogin() {
		return this._isLogin
	}
}