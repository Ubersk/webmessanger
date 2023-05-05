import { Card, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MESSAGE_ROUTES } from "../utils/consts";
import React from "react";

const MailItem = ({ mailStore, userStore}) => {
  const navigate = useNavigate();

  const users = Object.values(userStore.users);
      const UserCompare = users.find(user => user.id_user === mailStore.user_creator);
      const user_creator_name = UserCompare ? UserCompare.name : 'Неизвестный отправитель';
      userStore.user_creator = user_creator_name;
  return (mailStore &&
    <Col className="col-12 ms-2 column-reverse"
      onClick={() => navigate(MESSAGE_ROUTES + "/" + mailStore.id_message)}
    >
      <Card className="mt-3 form-control " style={{ minHeight: 100, cursor: "pointer" }} border={""}>
        <div name="2">
          <div className="m-lg-1" style={{fontSize:16}}><span className="border-bottom">Автор: {userStore.user_creator}</span></div>
          <div style={{ maxWidth: '300px' }} className="m-2 d-inline-block text-truncate">Тема: {mailStore.message_title}</div>
          <div style={{ maxWidth: '455px' }} className="m-2 bg-opacity-75 d-inline-block text-truncate">-{mailStore.message_body}</div>
          <div className="d-flex ms-2" style={{fontSize:13, opacity:0.7}}>Дата получения: {mailStore.date_create.slice(0,-14)} {mailStore.date_create.slice(11,-5)}</div>
        </div>
      </Card>
    </Col>
  );
};

export default MailItem;
