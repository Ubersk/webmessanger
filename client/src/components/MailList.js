import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Container, ListGroup, Row } from "react-bootstrap";
import MailItem from "./MailItem";

const MailList = observer(() => {
  const {mail} = useContext(Context)
  return (
    <Row className="d-flex">
      {mail.msg.map(mail =>
        <MailItem key={mail.id} mail={mail}/>

      )}
    </Row>

  );
});

export default MailList;