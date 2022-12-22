import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MailPage from "../pages/MailPage";
import { MESSAGE_ROUTES } from "../utils/consts";

const MailItem = ({ mail }) => {
  const navigate = useNavigate();
  return (
    <Col

      onClick={() => navigate(MESSAGE_ROUTES + "/" + mail.id)}
    >
      <Card className="mt-3 " style={{ minHeight: 50, cursor: "pointer" }} border={"info"}>
        <div className="d-flex justify-content-between   mt-3 ">
          <div className="m-lg-1">Автор: {mail.author}</div>
          <div  className="m-2 d-inline-block text-truncate">Тема: {mail.name}</div>
  <div style={{ maxWidth: '150px'}} className="m-2 bg-opacity-75 d-inline-block text-truncate">-{mail.msg_body}</div>
          <div className="d-flex blockquote-footer">{mail.dateCreate}</div>
        </div>
      </Card>
    </Col>
  );
};

export default MailItem;
