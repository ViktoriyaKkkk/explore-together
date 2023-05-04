import { makeAutoObservable } from 'mobx'

export default class LoginStore {
	constructor() {
		this._isLogin = false
		makeAutoObservable(this)
	}

	setIsLogin(bool){
		this._isLogin = bool
	}

	get isLogin() {
		return this._isLogin
	}
}