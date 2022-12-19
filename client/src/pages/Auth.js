import React, { useState } from "react";
import { Button, Card, Container, Form, NavLink, Row } from "react-bootstrap";
import { LOGIN_ROUTES } from "../utils/consts";
import { login, registration } from "../http/UserAPI";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTES;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const click = async () => {
    if (isLogin) {
      const response = await login();
    } else {
      const response = await registration(name, password);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-4"
            placeholder="Введите ваше ФИО..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            className="mt-4"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Row className="d-flex flex-row justify-content-between">
            <Button className="" variant={"outline-success"}>
              Войти
            </Button>
            <Button variant="link">
              <NavLink to={LOGIN_ROUTES}>Забыли пароль?</NavLink>
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
