import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTES,
  LOGIN_ROUTES,
  USERPROFILE_ROUTES,
  MAIL_ROUTES,
} from "../utils/consts";

const NavBar = observer(() => {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();
  const logOut = () => {
    userStore.setUser({});
    userStore.setIsAuth(false);
    localStorage.setItem("token", {});
    navigate(LOGIN_ROUTES);
  };

  // function AdminMenu(){
  //   console.log("Сработало");
  //   console.log(userStore.user.is_admin);
  //   if (userStore.user.is_admin === true)
  //   {
  //   navigate(ADMIN_ROUTES)
  //   }
  //   else{alert("Вы не администратор!")}
  // }
  

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href= "/" >Почта</Navbar.Brand>
        <Navbar.Brand style={{}} className="d-none d-lg-block lead" href= "/" >{userStore.user.name}</Navbar.Brand>

        {userStore.isAuth ? (
          <Nav className="ml-3" style={{ color: "white" }}>
            {userStore.user.is_admin ?
            (
            <div>
            <Button variant={"outline-info"} onClick={() => navigate(ADMIN_ROUTES)}>Админ</Button>
            </div>
            ):(
           <div/>   
            )}
            

            {/* <Button
              className="ms-lg-5 "
              variant={"outline-info"}
              onClick={() => navigate(USERPROFILE_ROUTES)}
            >
              {" "}
              Профиль
            </Button> */}
            <Button
              variant={"outline-danger"}
              className="ms-lg-2"
              onClick={() => logOut()}
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
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
export default NavBar;
