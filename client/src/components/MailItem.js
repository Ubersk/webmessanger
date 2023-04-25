import React from "react";
import { Card, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserStore from "../store/UserStore";
import { MESSAGE_ROUTES } from "../utils/consts";
const MailItem = ({ mailStore}) => {

  const navigate = useNavigate();
  return (mailStore &&
    <Col className="col-12 ms-2"
      onClick={() => navigate(MESSAGE_ROUTES + "/" + mailStore.id_message)}
    >
      <Card className="mt-3 form-control " style={{ minHeight: 100, cursor: "pointer" }} border={""}>
        <div className="">
          <div className="m-lg-1" style={{fontSize:20}}><span class="border-bottom">Автор: {UserStore.user && mailStore.user.name}</span></div>
          <div className="m-2 d-inline-block text-truncate">Тема: {mailStore.message_title}</div>
          <div style={{ maxWidth: '150px' }} className="m-2 bg-opacity-75 d-inline-block text-truncate">-{mailStore.message_body}</div>
          <div className="d-flex ms-2" style={{fontSize:13, opacity:0.7}}>Дата получения: {mailStore.date_create.slice(0,-14)} {mailStore.date_create.slice(11,-5)}</div>
        </div>
      </Card>
    </Col>
  );
};

export default MailItem;
