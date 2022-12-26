import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {  Row } from "react-bootstrap";
import MailItem from "./MailItem";

const MailList = observer(() => {
  const {mailStore, userStore} = useContext(Context)
  return (
    <Row className="d-flex">
      {mailStore.msg.map (mailStore =>
        <MailItem key={mailStore.id_mail} mailStore={mailStore} userStore = {userStore} />
      )}
    </Row>

  );
});

export default MailList;
