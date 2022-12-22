import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";


const MailPage = () => {
  const mailExample = {id:1, author:"Кручинин Святослав Станиславович", name: "Пример заголовка сообщения", msg_body:"Это пример написанного сообщения в блоке сообщения.Это пример написанного сообщения в блоке сообщения.Это пример написанного сообщения в блоке сообщения.Это пример написанного сообщения в блоке сообщения.Это пример написанного сообщения в блоке сообщения.Это пример написанного сообщения в блоке сообщения.Это пример написанного сообщения в блоке сообщения.Это пример написанного сообщения в блоке сообщения.Это пример написанного сообщения в блоке сообщения.", date_create:"31.07.2001" }
  return (
    <Container className="mt-3">
      <Col md={8}>
        <Button href="/">Назад</Button>
      <Row>
        <h2>Тема сообщения: {mailExample.name}</h2>
      </Row>
      </Col>
      <Col md={8}>
        <h3>Автор: {mailExample.author}</h3>
      </Col>
      <Col md={8} >
        <Card className="mt-3">
          <h5>{mailExample.msg_body}</h5>
        </Card>
        <Button className="m-3" variant={"secondary"}>Ответить</Button>
        <Button className="m-3" variant={"secondary"}>Переслать</Button>
      </Col>

    </Container>
  );
};

export default MailPage;
