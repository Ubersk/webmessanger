import React from "react";
import { Button, Card, Container, Form, NavLink, Row } from "react-bootstrap";
import { LOGIN_ROUTES } from "../utils/consts";

const Auth = () => {
  return (
   <Container className="d-flex justify-content-center align-items-center"
   style={{height: window.innerHeight - 54}}>
     <Card style={{width:600}} className="p-5">
       <h2 className="m-auto">Авторизация</h2>
       <Form className="d-flex flex-column">
         <Form.Control
         className="mt-4"
         placeholder="Введите ваше ФИО..."/>
       <Form.Control
         className="mt-4"
         placeholder="Введите ваш пароль..."/>

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