import React, { useContext,  useEffect} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {  Row } from "react-bootstrap";
import MailItem from "./MailItem";



const MailList = observer(() => {
  const {mailStore, userStore} = useContext(Context)
  const idUserAuth = userStore.user.id;
  let msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth || item.user_creator === idUserAuth);
  let filter = mailStore.search;
  console.log(msgs);
  if (filter !== "") {
    msgs = msgs.filter(item => item.message_body.includes(filter) || item.message_title.includes(filter));
    console.log(filter);
    console.log(msgs);
  } else {
    msgs = mailStore.msg.filter(item => item.userIdUser === idUserAuth || item.user_creator === idUserAuth);
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
