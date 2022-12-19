import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Почта</Navbar.Brand>

          {user.isAuth ?
            <Nav className="ml-auto" style={{color:'white'}}>
            <Button variant={"outline-info"}> Профиль</Button>
            <Button variant={"outline-danger"}onClick={()=>user.setIsAuth(false)}> Выход</Button>
            </Nav>
          :
        <Nav className="ml-auto" style={{color:'white'}}>vxfdik
          <Button variant={"outline-warning"} onClick={()=>user.setIsAuth(true)}> Авторизация</Button>
        </Nav>
          }


      </Container>
    </Navbar>
  );
});
export default NavBar;