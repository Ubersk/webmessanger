import React, { useContext,  useEffect} from "react";
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
  console.log(msgs);

//Реализация поиска
  if (search !== "") {
    msgs = msgs.filter(item => item.message_body.includes(search) || item.message_title.includes(search));
    console.log(search);
    console.log(msgs);
  } else {
    msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth || item.user_creator === idUserAuth);
  }
//Реализация папок сообщений
let folder = mailStore.types;
switch (folder) {
  case 1: //all
   msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth || item.user_creator === idUserAuth);
    break;
  case 2: //send
   msgs = mailStore.msg.filter(item => item.user_creator === idUserAuth);
  break;
  case 3: //take
    msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth);
  break;
  case 4: //del
    msgs = mailStore.msg.filter(item => item.msg_type === 1 && item.userIdUser === idUserAuth || item.user_creator === idUserAuth); 
  break;
}
  return (
    <Row className="d-flex flex-column-reverse">
      {msgs.map (mailStore =>
        <MailItem key={mailStore.id_message} mailStore={mailStore} userStore = {userStore} />
      )}
    </Row>
  );
});
export default MailList;
