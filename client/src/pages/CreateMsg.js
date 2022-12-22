import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import {
  MAIL_ROUTES,
  REGISTRATION_ROUTES,
} from "../utils/consts";
import { useNavigate } from "react-router-dom";

const CreateMsg = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="mb-3 mt-3 ">
        <Button variant={"dark"} onClick={() => navigate(MAIL_ROUTES)}>
          Назад
        </Button>
      </div>
      <Card>
        <Button
          onClick={() => navigate(REGISTRATION_ROUTES)}
          variant={"outline-success"}
        >
          Добавить пользователя
        </Button>
        <Button variant={"outline-danger"}>Удалить пользователя</Button>
      </Card>
      <Card className="mt-5">
        <Button variant={"outline-warning"}>Логи сообщений</Button>
      </Card>
    </Container>
  );
};

export default CreateMsg;
