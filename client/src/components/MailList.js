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
 
//Реализация папок сообщений
console.log(mailStore.folder)
    switch (mailStore.folder) {
      case 1: //all
       msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth || item.user_creator === idUserAuth);
       Search();
        break;
      case 2: 
      alert("В разработке")
      Search();

      break;
      case 3: //send
      msgs = mailStore.msg.filter(item => item.user_creator === idUserAuth && item.userIdUser !== idUserAuth);
      Search();
      break;
      case 4://take
      msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth);
      Search();
      break;
      case 5: //del
      msgs = mailStore.msg.filter(item => item.msg_type === 3 && item.userIdUser === idUserAuth); 
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
