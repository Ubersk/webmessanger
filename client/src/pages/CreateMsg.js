import React, { useContext, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import {
  MAIL_ROUTES,
  REGISTRATION_ROUTES,
} from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { createMsg } from "../http/mailAPI";
import Form from 'react-bootstrap/Form';
const CreateMsg = () => {
  const { mailStore, userStore } = useContext(Context);
  const [user_receiver, setName] = useState("");
  const [message_title, setTextTitle] = useState("");
  const [message_body, setTextBody] = useState("");
const mail_folderId =2
  const user_sender = {name: userStore.user}
  const click = async () => {
  console.log(user_receiver, message_title, message_body)
    console.log(user_sender)
    try {
       const param = {

         user_sender,
         message_title,
         message_body,
         mail_folderId,
         user_receiver,
       }
      const data = await createMsg(param);
      mailStore.setMsg(data);
      navigate(MAIL_ROUTES);
      console.log(data);

    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const navigate = useNavigate();
  return (
    <Container  className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 200 }}>

      <Card style={{ width: 900 }}>

        <div className="input-group mb-3">
          <span className="input-group-text" >Кому:</span>
          <Form.Select>
            {userStore &&
              userStore.users.map(item =>
              <option value = {item.id_user}>
                {item.name}
              </option>)
            }
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
            aria-label="Пример размера поля ввода"
            aria-describedby="inputGroup-sizing-lg"/>
        </div>

        <div className="input-group">
          <span className="input-group-text">Введите сообщение</span>
          <textarea
            id="msg_body"
            value={message_body}
            onChange={(e) => setTextBody(e.target.value)}
            className="form-control" aria-label="С текстовым полем"></textarea>
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
