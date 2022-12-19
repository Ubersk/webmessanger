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
    this._funcmail =
      [
        {id:1, name:'Удалить'},
        {id:2, name:'Создать'},
        {id:3, name:'Переслать'},
        {id:4, name:'Ответить'},
      ]
    this._msg =
      [
        {id:1, name:'Празднование Нового года', msg_body:'ауцпауцйапуцйуйца', dateCreate:'31.07.2001'},
        {id:2, name:'Сдача ежегодных отчетов', msg_body:'ауцпауцйапуцйуйца', dateCreate:'31.07.2001'},
        {id:3, name:'Объявление: Котята!', msg_body:'ауцпауцйапуцйуйца', dateCreate:'31.07.2001'},
        {id:4, name:'Верни деньги.', msg_body:'ауцпауцйапуцйуйца', dateCreate:'31.07.2001'},
      ]
    this._selectedType = {}
    makeAutoObservable(this)
  }

  setTypes(types)
  {
    this._types = types
  }
  setFuncMail(func)
  {
    this._funcmail = func
  }
  setMsg(msg)
  {
    this._msg = msg
  }
  setSelectedType(type)
  {
    this._selectedType = type
  }
  setSelectedFunc(func)
  {
    this._selectedType = func
  }
  get types()
  {
    return this._types
  }
  get func()
  {
    return this._funcmail
  }
  get msg()
  {
    return this._msg
  }
  get selectedType()
  {
    return this._selectedType
  }
}