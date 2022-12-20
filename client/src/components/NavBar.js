import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTES,
  LOGIN_ROUTES,
  USERPROFILE_ROUTES,
} from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Почта</Navbar.Brand>

        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              className="ms-lg-5 "
              variant={"outline-info"}
              onClick={() => navigate(ADMIN_ROUTES)}
            >
              {" "}
              Админ
            </Button>
            <Button
              className="ms-lg-5 "
              variant={"outline-info"}
              onClick={() => navigate(USERPROFILE_ROUTES)}
            >
              {" "}
              Профиль
            </Button>
            <Button
              variant={"outline-danger"}
              className="ms-lg-2"
              onClick={() => navigate(LOGIN_ROUTES)}
            >
              Выход
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-2" style={{ color: "white" }}>
            <Button
              variant={"outline-warning"}
              onClick={() => navigate(LOGIN_ROUTES)}
            >
              {" "}
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
export default NavBar;
