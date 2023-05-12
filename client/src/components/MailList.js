import React, { useContext,  useEffect} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {  Row } from "react-bootstrap";
import MailItem from "./MailItem";

const MailList = observer(() => {
  const {mailStore, userStore} = useContext(Context)
  const bool = new Boolean([false]);
  // console.log("Пользователь:", userStore.user.name,"Авторизован:", userStore.isAuth)
  
  return (

    <Row className="d-flex flex-column-reverse">
      {mailStore.msg.map (mailStore =>
        <MailItem key={mailStore.id_message} mailStore={mailStore} userStore = {userStore} />
      )}
    </Row>

  );
});

export default MailList;
