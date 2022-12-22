import React, { useContext, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import {
  MAIL_ROUTES,
  REGISTRATION_ROUTES,
} from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { login, registration } from "../http/UserAPI";
import { createMsg } from "../http/mailAPI";

const CreateMsg = () => {
  const { mail, user } = useContext(Context);
  const [name, setName] = useState("");
  const [message_title, setTextTitle] = useState("");
  const [message_body, setTextBody] = useState("");
const mail_folderId =1
  const click = async () => {
    try {
      let data;
        data = await createMsg( message_title,
          message_body,
          mail_folderId,
          name,);
      mail.setMsg(data);
      console.log(mail);

    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const navigate = useNavigate();
  return (
    <Container  className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 200 }}>

      <Card style={{ width: 900 }}>


        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Имя пользователя"
                  aria-label="Имя пользователя"
                  aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">Тема</span>
          <input
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
        {message_title != "" && <div className="alert alert-success d-flex align-items-center" role="alert">
          <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
          </svg>
          <div>
            Пример уведомления об успехе с иконкой
          </div>
        </div>}

      </Card>


</Container>
  );
};

export default CreateMsg;
