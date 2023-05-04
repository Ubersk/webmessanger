import React, { useContext, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { MAIL_ROUTES} from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { createMsg } from "../http/mailAPI";
import Form from 'react-bootstrap/Form';
const CreateMsg = () => {
  const { mailStore, userStore } = useContext(Context);
  const [userIdUser, setName] = useState("");
  const [message_title, setTextTitle] = useState("");
  const [message_body, setTextBody] = useState("");
  const [files_body, setFilesBody] = useState("");
  const navigate = useNavigate();
  
  //Метод нажатия на кнопку "Отправить"
  const click = async () => {
  console.log("Отправитель:", userStore.user.name)
  console.log(userIdUser, message_title, message_body)

  //Вложение в переменную name а не id
  const user_creator = userStore.user.id;
  const users = Object.values(userStore.users);
  console.log(users);
  const selecteduser = users.find(user => user.id_user === user_creator)
  const user_creator_name = selecteduser ? selecteduser.name : 'Неизвестный отравитель';
  console.log(user_creator_name);
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
      alert("Сообщение отправлено!");
      console.log(data);
    } catch (e) {
      alert("Ошибка!");
    }
  };

  return (
    
    <Container  className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 200 }}>

      <Card style={{ width: 900 }}>

        <div className="input-group mb-3">
          <span className="input-group-text" >Кому:</span>
          <input
          value={userIdUser}
          onChange={(e) => setName(e.target.value)}/>
          <Form.Select>
            value = {userStore &&
              userStore.users.map(item =>
              <option value = {item.id_user}>
                {item.name}
              </option>)}
            onChange={(e) => setName(e.target.value)}
          </Form.Select>
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

        <div class="d-flex mt-3">
          <span className="input-group-text">Прикрепить файл</span>
          <input
          value={files_body}
          onChange={(e) => setFilesBody(e.target.value)} 
          class="m-1" 
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
            onClick={() => navigate(MAIL_ROUTES)}
            variant={"outline-danger"}>
            Отмена
          </Button>
        </Row>
      </Card>
    </Container>
  );
};
export default CreateMsg;
