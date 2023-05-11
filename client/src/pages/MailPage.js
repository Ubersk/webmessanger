import React, {useEffect, useState, useContext} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {fetchAllUsers} from "../http/UserAPI";
import {useParams} from "react-router-dom";
import {fetchOneMsg} from "../http/mailAPI";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { MAIL_ROUTES} from "../utils/consts";
import { CREATE_MSG_ROUTES} from "../utils/consts";


const MailPage = () => {
const {userStore} = useContext(Context);
const [mail, setMail] = useState(null)
const {id} = useParams()
const navigate = useNavigate();

function AnswerOnMsg()
      {
        // navigate(CREATE_MSG_ROUTES);
        const AnswerTitleMsg = "Ответ на тему: " + document.getElementById('tema').innerText.substr(16, 100);
        const TakeAnswerTitleMsg = AnswerTitleMsg;
        const AnswerUserReciever = document.getElementById('reciever').innerText.substr(6,100);
        const TakeAnswerUserReciever = AnswerUserReciever;
        console.log(TakeAnswerTitleMsg, TakeAnswerUserReciever);
      }
  useEffect(() =>{
    fetchOneMsg(id).then(data => {
      setMail(data);
      console.log(data); 
      //Обработка автора сообщения
      const users = Object.values(userStore.users);
      const UserCompare = users.find(user => user.id_user === data.user_creator);
      const user_creator_name = UserCompare ? UserCompare.name : 'Неизвестный отправитель';
      data.user_creator = user_creator_name;

      //Обработка получателя сообщения
      const UserReciever = users.find(user => user.id_user === data.userIdUser);
      const user_reciever_name = UserReciever ? UserReciever.name : 'Неизвестный получатель';
      data.userIdUser = user_reciever_name; 
    })
  },[])

  return (mail &&
    <Container className=" mt-5 d-flex justify-content-center">
     <Col >
     <div>
        <div
        className="mx-3 d-flex justify-content-center">
        <Button className="mt-3 me-4 mb-3" onClick={() => navigate(MAIL_ROUTES)}>Назад</Button>
          <Col>
        <h4 className="border-bottom">Автор: {mail.user_creator}</h4>
        <h4 id="reciever" className="border-bottom">Кому: {mail.userIdUser}</h4>
        <h6>Тип сообщения: {"Личное"}</h6>
          </Col>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
      <Button className="m-1 border border-secondary" variant={"success"} onClick={() => navigate(CREATE_MSG_ROUTES)}>Создать</Button>
      <Button className="m-1 border border-secondary" variant={"primary"} onClick={() => AnswerOnMsg()}>Ответить</Button>
      <Button className="m-1 border border-secondary" variant={"primary"}>Переслать</Button>
      <Button className="m-1 border border-secondary" variant={"danger"}>Удалить</Button>
      <Button className="m-1 border border-secondary text-white" variant={"warning"}>Создать событие</Button>
      </div>
      <Card className="border border-secondary">
      <Col>
       <Row className="d-flex p-2 mx-2 border-bottom">
        <h4 id="tema">Тема сообщения: {mail.message_title}</h4>
       </Row>
       </Col>
       <Col>
        <Card className="m-3 mt-3 border border-secondary">
          <h6 className="m-2">{mail.message_body}</h6>
         </Card>
      </Col>
      </Card>
     </Col>
    </Container>
  );
};

export default MailPage;
