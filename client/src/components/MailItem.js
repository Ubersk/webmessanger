import React from "react";
import { Card, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MESSAGE_ROUTES } from "../utils/consts";
const MailItem = ({ mailStore}) => {

  const navigate = useNavigate();
  return (mailStore &&
    <Col
      onClick={() => navigate(MESSAGE_ROUTES + "/" + mailStore.id_mail)}
    >
      <Card className="mt-3 " style={{ minHeight: 50, cursor: "pointer" }} border={"info"}>
        <div className="d-flex justify-content-between   mt-3 ">
          <div className="m-lg-1">Автор: {mailStore.user && mailStore.user.name}</div>
          <div  className="m-2 d-inline-block text-truncate">Тема: {mailStore.message_title}</div>
  <div style={{ maxWidth: '150px'}} className="m-2 bg-opacity-75 d-inline-block text-truncate">-{mailStore.message_body}</div>
          <div className="d-flex blockquote-footer  ">{mailStore.date_create}</div>
        </div>
      </Card>
    </Col>
  );
};

export default MailItem;
