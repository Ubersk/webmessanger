import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, NavLink } from "react-bootstrap";
import { LOGIN_ROUTES, MAIL_ROUTES } from "../utils/consts";
import { login, registration } from "../http/UserAPI";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTES;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(name, password);
      } else {
        data = await registration(name, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(MAIL_ROUTES);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-4"
            placeholder={isLogin ? "Введите ваше ФИО" : "Введите ФИО"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            className="mt-4"
            placeholder={isLogin ? "Введите ваш пароль" : "Введите пароль"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Container>
            {isLogin ? (
              <div>
                <Button
                  className="mt-3 col-md-8"
                  style={{ minWidth: 200 }}
                  variant={"outline-primary"}
                  onClick={click}
                >
                  Войти
                </Button>
                <Button className="mt-3 col-md-4" variant="link">
                  <NavLink to={LOGIN_ROUTES}>Забыли пароль?</NavLink>
                </Button>
              </div>
            ) : (
              <div className="mt-3 d-flex flex-column ">
                <Button
                  style={{ minWidth: 200 }}
                  variant={"outline-primary"}
                  onClick={click}
                >
                  Создать
                </Button>
              </div>
            )}
          </Container>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
