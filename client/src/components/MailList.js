import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {  Row } from "react-bootstrap";
import MailItem from "./MailItem";

const MailList = observer(() => {
  const {mail, user} = useContext(Context)
  return (
    <Row className="d-flex">
      {mail.msg.map(mail =>
        <MailItem key={mail.id_mail} mail={mail} user = {user}/>
      )}
    </Row>

  );
});

export default MailList;
