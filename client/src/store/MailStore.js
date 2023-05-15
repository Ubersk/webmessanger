import { makeAutoObservable } from "mobx";

export default class MailStore {
  constructor() {
    this._folder = 1;
    this._msg = [];
    this._selectedType = {};
    this._answer = {};
    this._search={};
    makeAutoObservable(this);
    
  }

  get search(){
    return this._search;
  }
  get answer(){
    return this._answer;
  }
  get folder() {
    return this._folder;
  }

  get msg() {
    return this._msg;
  }

  get selectedType() {
    return this._selectedType;
  }

  setSearch(search){
    this._search = search;
  }
  setAnswer(answer){
    this._answer = answer;
  }

  setFolder(folder) {
    this._folder = folder;
  }
  setMsg(msg) {
    this._msg = msg;
  }
  
  setSelectedType(type) {
    this._selectedType = type;
  }
}
export const mailStore = new MailStore();
