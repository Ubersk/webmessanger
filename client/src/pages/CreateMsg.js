import React, { useContext, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { MAIL_ROUTES} from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { createMsg } from "../http/mailAPI";


const CreateMsg = () => {
  const { mailStore, userStore } = useContext(Context);
  const [userIdUser, setName] = useState("");
  const [message_title, setTextTitle] = useState("");
  const [message_body, setTextBody] = useState("");
  const [files_body, setFilesBody] = useState("");
  const navigate = useNavigate();
  
  //Метод нажатия на кнопку "Отправить"
  const click = async () => {
  //Вложение создателя сообщения в переменную name а не id
  const user_creator = userStore.user.id;
  const users = Object.values(userStore.users);
  console.log(users);
  const selecteduser = users.find(user => user.id_user === user_creator)
  const user_creator_name = selecteduser ? selecteduser.name : 'Неизвестный отправитель';

  //Обработка принятия user_reciever(пользователя получателя)



    try {
       const param = {
         user_creator,
         message_title,
         message_body,
         files_body,
         userIdUser,
       }
      const data = await createMsg(param);
      mailStore.setMsg(data);
      alert="Сообщение успешно отправлено!";
    } catch (e) {
      
      alert("Ошибка!");
    }
  };
  return ( 
    <Container  className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 200 }}>
      <Card style={{ width: 1200 }}>
        <div className="input-group mb-3">
          <span className="input-group-text" >Кому:</span>
          <input
          value={userIdUser}
          onChange={(e) => setName(e.target.value)}
          className="form-control"/>
        </div>
        <div className="input-group input-group-lg">
          <span className="input-group-text">Тема</span>
          <input
            id="theme"
            value={message_title}
            onChange={(e) => setTextTitle(e.target.value)}
            type="text"
            className="form-control"
            />
        </div>
        <div className="input-group">
          <span className="input-group-text">Введите сообщение</span>
          <textarea
            id="msg_body"
            value={message_body}
            onChange={(e) => setTextBody(e.target.value)}
            className="form-control"></textarea>
        </div>
        <div className="d-flex mt-3">
          <span className="input-group-text">Прикрепить файл</span>
          <input
          value={files_body}
          onChange={(e) => setFilesBody(e.target.value)} 
          className="m-1" 
          type="file"></input>
        </div>
        <Row className={"d-flex justify-content-around"}>
          <Button
            style={{maxWidth:200}}
            className={"m-3"}
            onClick={click}
            variant={"outline-success"}
          >
            Отправить
          </Button>
          <Button
            style={{maxWidth:200}}
            className={"m-3"}
            href="/"
            variant={"outline-danger"}>
            Отмена
          </Button>
        </Row>
      </Card>
    </Container>
  );
};
export default CreateMsg;
