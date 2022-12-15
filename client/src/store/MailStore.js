import {makeAutoObservable} from "mobx";

export default class MailStore {
    constructor() {
        this._types =
            [
                {id:1, name: "Входящие"},
                {id:2, name: "Исходящие"},
                {id:3, name: "Спам"},
                {id:4, name: "Корзина"},
            ]

        this._eventmsg =
            [
                {id:1, name: "Создать"},
                {id:2, name: "Ответить"},
                {id:3, name: "Переслать"},
                {id:4, name: "Удалить"},
            ]
     this._messages =
            [
                {id:1, message_title: "Документация", dateCreate:"31.07.2001"},
                {id:2, message_title: "Новый год", dateCreate:"31.07.2001"},
                {id:3, message_title: "Объявление", dateCreate:"31.07.2001"},
                {id:4, message_title: "Передача документов", dateCreate:"31.07.2001"},
            ]

        makeAutoObservable(this)
    }
    setTypes(type)
    {
        this._types = type
    }
    setEventMsg(eventMsg)
    {
        this._eventmsg  = eventMsg
    }
    setMessages(messages)
    {
        this._messages  = messages
    }
    get types()
    {
        return this._types
    }
    get eventMsg()
    {
        return this._eventmsg
    }
    get messages()
    {
        return this._messages
    }
}