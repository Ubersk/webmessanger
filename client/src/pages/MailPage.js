import React, {useEffect, useState, useContext} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {fetchAllUsers} from "../http/UserAPI";
import {useParams} from "react-router-dom";
import {fetchOneMsg} from "../http/mailAPI";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { MAIL_ROUTES} from "../utils/consts";
import { CREATE_MSG_ROUTES} from "../utils/consts";
import MailStore from "../store/MailStore";


const MailPage = () => {
const {userStore, mailStore} = useContext(Context);
const [mail, setMail] = useState(null)
const {id} = useParams()
const navigate = useNavigate();



function AnswerOnMsg() {
  const title = "Ответ на тему: " + mail.message_title;
  const user = mail.user_creator;
  const text = "\n>>писал " +mail.user_creator+": "+ mail.message_body;
  mailStore.setAnswer({title, user, text})
  console.log(mailStore.answer);
  navigate(CREATE_MSG_ROUTES);
}

function ForwardMsg() {
  const title = "Переслано от: " + mail.user_creator+" Тема: " + mail.message_title
  const user = "";
  const text = "\n>>пишет: " +mail.user_creator+" "+ mail.message_body;
  mailStore.setAnswer({title, user, text})
  console.log(mailStore.answer);
  navigate(CREATE_MSG_ROUTES);  
}

  useEffect(() =>{

   

    fetchOneMsg(id).then(data => {
      setMail(data);
      
      console.log(data); 

      const idUserAuth = userStore.user.id;
      if (data.userIdUser !== idUserAuth && data.user_creator !== idUserAuth) {
        alert('У вас нет доступа к этой странице');
        navigate(MAIL_ROUTES);
      console.log(idUserAuth)
      }

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
        <h4 id="author" className="border-bottom">Автор: {mail.user_creator}</h4>
        <h4 id="reciever" className="border-bottom">Кому: {mail.userIdUser}</h4>
        <h6>Тип сообщения: {"Личное"}</h6>
          </Col>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
      <Button className="m-1 border border-secondary" variant={"success"} onClick={() => navigate(CREATE_MSG_ROUTES)}>Создать</Button>
      <Button className="m-1 border border-secondary" variant={"primary"} onClick={() => AnswerOnMsg()}>Ответить</Button>
      <Button className="m-1 border border-secondary" variant={"primary"} onClick={() => ForwardMsg()}>Переслать</Button>
      <Button className="m-1 border border-secondary" variant={"danger"}>Удалить</Button>
      </div>
      <Card className="border border-secondary">
      <Col>
       <Row className="d-flex p-2 mx-2 border-bottom">
        <h4 id="tema">Тема сообщения: {mail.message_title}</h4>
       </Row>
       </Col>
       <Col>
        <Card className="m-3 mt-3 border border-secondary">
        <textarea
        disabled
            autoFocus
            spellCheck = "true"
            wrap="hard"
            style={{height:300, resize:""}}
            id="msg_body"
            className="form-control resize-none;"
            value={mail.message_body}></textarea>
         </Card>
      </Col>
      </Card>
     </Col>
    </Container>
  );
};

export default MailPage;
