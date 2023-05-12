import { makeAutoObservable } from "mobx";

export default class MailStore {
  constructor() {
    this._types = [];
    this._msg = [];
    this._selectedType = {};
    this._answer = {};
    makeAutoObservable(this);
  }

  get answer(){
    return this._answer;
  }
  get types() {
    return this._types;
  }

  get msg() {
    return this._msg;
  }

  get selectedType() {
    return this._selectedType;
  }

  setAnswer(answer){
    this._answer = answer;
  }

  setTypes(types) {
    this._types = types;
  }

  setMsg(msg) {
    this._msg = msg;
  }
  
  setSelectedType(type) {
    this._selectedType = type;
  }

}
