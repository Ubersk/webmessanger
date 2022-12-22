import { makeAutoObservable } from "mobx";
import {fetchAllUsers} from "../http/UserAPI";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._users = [];
    makeAutoObservable(this);

    // setInterval(() => {
    //   fetchAllUsers().then(data => {
    //     this._users = data;
    //     console.log(data)
    //   })
    // }, 5000)

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
