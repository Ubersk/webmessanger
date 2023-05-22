import React, { useContext} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {  Row } from "react-bootstrap";
import MailItem from "./MailItem";
const MailList = observer(() => {

  const {mailStore, userStore} = useContext(Context)
  const idUserAuth = userStore.user.id;

//Фильтрация
  let msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth || item.user_creator === idUserAuth);
  let search = mailStore.search;

//Реализация поиска
function Search(){
  if (search !== "") {
    msgs = msgs.filter(item => item.message_body.includes(search) || item.message_title.includes(search));
    console.log(search);
    console.log(msgs);
  } 
}

function NewMsgs(){ 
 let today = new Date();
 console.log(msgs);
 let filteredData = msgs.filter(item => {
  if (!(item.date_create instanceof Date)) { // проверяем, является ли свойство date_create объектом Date
    item.date_create = new Date(item.date_create); // если нет, то конвертируем его в объект Date
  }
  let diff = today.getTime() - item.date_create.getTime(); // вычисляем разницу в миллисекундах между датами
  let diffInDays = diff / (1000 * 3600 * 24); // переводим разницу в дни
  console.log(diffInDays)

  return diffInDays <= 1; // возвращаем только объекты, у которых дата создания меньше сегодняшней на один день или меньше
});

if (filteredData.length === 0) { // если нет объектов, у которых дата создания меньше сегодняшней на один день или меньше
  console.log("Нет данных"); // выводим сообщение

} else { // иначе
  msgs = filteredData;
  console.log(filteredData); // выводим список этих объектов
}
}
 
//Реализация папок сообщений
console.log(mailStore.folder)

    switch (mailStore.folder) {
      case 1: //all
       msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth || item.user_creator === idUserAuth);
       Search();
        break;
      case 2: //new
      NewMsgs();
      Search();

      break;
      case 3: //send
      msgs = mailStore.msg.filter(item => item.user_creator === idUserAuth && item.userIdUser !== idUserAuth);
      Search();
      break;
      case 4://take
      msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth && item.msg_type !== 2);
      Search();
      break;
      case 5: //del
      msgs = mailStore.msg.filter(item => item.msg_type !== 1 && item.userIdUser === idUserAuth); 
       Search();
      break;
    }

    // setTimeout("window.location.reload()",60000) 

  return (
    
    <Row className="d-flex flex-column-reverse">
      {msgs.map (mailStore =>
      
        <MailItem key={mailStore.id_message} mailStore={mailStore} userStore = {userStore} />
      )}
    </Row>
  );
});
export default MailList;
