import React, {useEffect, useState, useContext} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {fetchAllUsers, fetchOneUser} from "../http/UserAPI";
import {useParams} from "react-router-dom";
import {fetchOneMsg} from "../http/mailAPI";
import UserStore from "../store/UserStore";
import { Context } from "../index";

const MailPage = () => {
const { mailStore, userStore } = useContext(Context);
const [mail, setMail] = useState(null)
  console.log(mail)
  const {id} = useParams()

  useEffect(() =>{

    fetchAllUsers().then(users => {
      userStore.setUsers(users);
    })

    fetchOneMsg(id).then(data => {
      console.log(data); 
      setMail(data);
      const UserCompare = userStore.users.filter(item => item.id_user == data.user_creator);
      console.log(UserCompare, userStore.users);
      
    })
  },[])


  return (mail &&
    <Container className="mt-3">
      <Col md={8}>
        <Button href="/">Назад</Button>
      
        <Col md={8}>
        <h5>Автор: {mail.user_creator}</h5>
        </Col>
        <Col md={8}>
        <h3>Кому: {mail.user_reciever && mail.user.name}</h3>
        </Col>
      
       <Row>
        <h2>Тема сообщения: {mail.message_title}</h2>
       </Row>
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
