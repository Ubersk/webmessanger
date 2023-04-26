import { makeAutoObservable } from "mobx";
export default class UserStore {
  constructor() {
    this._isAuth = true
    this._user = {};
    this._users = [];
    makeAutoObservable(this);
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
   get  users() {
    return this._users;
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  setUsers(users){
    this._users = users
  }

 
}
