import React, {useEffect, useState, useContext} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {fetchAllUsers, fetchOneUser} from "../http/UserAPI";
import {useParams} from "react-router-dom";
import {fetchOneMsg} from "../http/mailAPI";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { MAIL_ROUTES} from "../utils/consts";

const MailPage = () => {
const { mailStore, userStore } = useContext(Context);
const [mail, setMail] = useState(null)
  const {id} = useParams()

  useEffect(() =>{

    fetchAllUsers().then(users => {
      userStore.setUsers(users);
    })

    fetchOneMsg(id).then(data => {
      setMail(data);
      console.log(data); 
      const users = Object.values(userStore.users);
      const UserCompare = users.find(user => user.id_user === data.user_creator);
      const user_creator_name = UserCompare ? UserCompare.name : 'Неизвестный отравитель';
      data.user_creator = user_creator_name;
      console.log(user_creator_name);

      
    })
  },[])

  const navigate = useNavigate();
  return (mail &&
    <Container className="mt-3">
      <Col md={8}>
        <Button 
            onClick={() => navigate(MAIL_ROUTES)}
            >Назад</Button>
      
        <Col md={8}>
        <h5>Автор: {mail.user_creator}</h5>
        </Col>
        <Col md={8}>
        <h5>Кому: {mail.user_reciever && mail.user.name}</h5>
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
