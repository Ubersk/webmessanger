import React, {useEffect, useState} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import {useParams} from "react-router-dom";
import {fetchOneMsg} from "../http/mailAPI";
const MailPage = () => {
const [mail, setMail] = useState(null)
  console.log(mail)
  const {id} = useParams()
  useEffect(() =>{
    fetchOneMsg(id).then(data => {console.log(data); setMail(data)})

  },[])
  return (mail &&
    <Container className="mt-3">
      <Col md={8}>
        <Button href="/">Назад</Button>
      <Row>
        <h2>Тема сообщения: {mail.message_title}</h2>
      </Row>
      </Col>
      <Col md={8}>
        <h3>Автор: {mail.user && mail.user.name}</h3>
      </Col>
      <Col md={8} >
        <Card className="mt-3">
          <h5>{mail.message_body}</h5>
        </Card>
        <Button className="m-3" variant={"secondary"}>Ответить</Button>
        <Button className="m-3" variant={"secondary"}>Переслать</Button>
      </Col>

    </Container>
  );
};

export default MailPage;
