import { makeAutoObservable } from "mobx";

export default class MailStore {
  constructor() {
    this._filter = {};
    this._types = [];
    this._msg = [];
    this._selectedType = {};
    this._answer = {};
    this._search={};
    makeAutoObservable(this);
  }
  get filter(){
    return this._filter;
  }
  get search(){
    return this._search;
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

  setFilter(filter){
    this._filter = filter;
  }
  setSearch(search){
    this._search = search;
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
