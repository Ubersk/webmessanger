import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite";


const NavBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Почта</Navbar.Brand>

          {user.isAuth ?
            <Nav className="ml-auto" style={{color:'white'}}>
            <Button className="ms-lg-5 " variant={"outline-info"}> Профиль</Button>
            <Button href="/login" variant={"outline-danger"}className="ms-lg-2" onClick={()=>user.setIsAuth(false)}>  Выход</Button>
            </Nav>
          :
        <Nav className="ml-2" style={{color:'white'}}>
          <Button variant={"outline-warning"} onClick={()=>user.setIsAuth(true)}> Авторизация</Button>
        </Nav>
          }


      </Container>
    </Navbar>
  );
});
export default NavBar;