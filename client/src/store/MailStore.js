import { makeAutoObservable } from "mobx";

export default class MailStore {
  constructor() {
    this._types = [];
    this._msg = [
      {
        id: 1,
        author: "Кручинин Святослав Станиславович",
        name: "Празднование Нового года",
        msg_body: "Это пример сообщения.",
        dateCreate: "31.07.2001",
      },
      {
        id: 2,
        author: "Кручинин Станислав Владимирович",
        name: "Сдача ежегодных отчетов",
        msg_body: "Это пример сообщения.Это пример сообщения.Это пример сообщения.Это пример сообщения.Это пример сообщения.Это пример сообщения.",
        dateCreate: "31.07.2001",
      },
      {
        id: 3,
        author: "Кручинина Владислава Станиславовна",
        name: "Объявление: Котята!",
        msg_body: "ауцпауцйапуцйуйца",
        dateCreate: "31.07.2001",
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
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
