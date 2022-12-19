import { makeAutoObservable } from "mobx";

export default class MailStore {
  constructor() {
    this._types =
      [
        {id:1, name:'Входящие'},
        {id:2, name:'Исходящие'},
        {id:3, name:'Спам'},
        {id:4, name:'Корзина'},
      ]
    this._msg =
      [
        {id:1, name:'Празднование Нового года', msg_body:'ауцпауцйапуцйуйца', dateCreate:'31.07.2001'},
        {id:2, name:'Сдача ежегодных отчетов', msg_body:'ауцпауцйапуцйуйца', dateCreate:'31.07.2001'},
        {id:3, name:'Объявление: Котята!', msg_body:'ауцпауцйапуцйуйца', dateCreate:'31.07.2001'},
        {id:4, name:'Верни деньги.', msg_body:'ауцпауцйапуцйуйца', dateCreate:'31.07.2001'},
      ]
    makeAutoObservable(this)
  }

  setTypes(types)
  {
    this._types = types
  }
  setMsg(msg)
  {
    this._msg = msg
  }
  get types()
  {
    return this._types
  }
  get msg()
  {
    return this._msg
  }
}