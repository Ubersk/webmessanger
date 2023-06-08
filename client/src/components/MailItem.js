import { Card, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MESSAGE_ROUTES } from "../utils/consts";
import React from "react";

const MailItem = ({ mailStore, userStore}) => {
  const navigate = useNavigate();


//Форматирование вывода автора сообщения
      const users = Object.values(userStore.users);
      const UserCompare = users.find(user => user.id_user === mailStore.user_creator);
      const user_creator_name = UserCompare ? UserCompare.name : 'Неизвестный отправитель';
      userStore.user_creator = user_creator_name;

// Форматирование даты получения сообщений
      const date = new Date(Date.parse(mailStore.date_create));
      const options = { timeZone: 'Europe/Moscow' };
      const formattedDate = date.toLocaleString('ru-RU', options);


  return (mailStore &&
    <Col className="col-12 ms-2"
      onClick={() => navigate(MESSAGE_ROUTES + "/" + mailStore.id_message)}
    >
      <Card className="mt-2 form-control border border-info " style={{ minHeight: 100, cursor: "pointer" }} border={""}>
        <div name="2">
          <div style={{fontSize:18}}><span className="border-bottom border-info">Автор: {userStore.user_creator}</span></div>
          <div  className="mt-1 form-control" style={{fontSize:15}}>Тема: {mailStore.message_title}</div>
          <div  className="form-control  text-truncate mt-1" style={{fontSize:13}}>Сообщение: {mailStore.message_body}</div>
          <div className="d-flex ms-2" style={{fontSize:13, opacity:0.7}}>Дата получения: {formattedDate}</div>
        </div>
      </Card>
    </Col>
  );
};

export default MailItem;
