import React, {useEffect, useState} from "react";
import { Card, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MESSAGE_ROUTES } from "../utils/consts";
const MailItem = ({ mail}) => {

  const navigate = useNavigate();
  return (mail &&
    <Col
      onClick={() => navigate(MESSAGE_ROUTES + "/" + mail.id_mail)}
    >
      <Card className="mt-3 " style={{ minHeight: 50, cursor: "pointer" }} border={"info"}>
        <div className="d-flex justify-content-between   mt-3 ">
          <div className="m-lg-1">Автор: {mail.user && mail.user.name}</div>
          <div  className="m-2 d-inline-block text-truncate">Тема: {mail.message_title}</div>
  <div style={{ maxWidth: '150px'}} className="m-2 bg-opacity-75 d-inline-block text-truncate">-{mail.message_body}</div>
          <div className="d-flex blockquote-footer">{mail.date_create}</div>
        </div>
      </Card>
    </Col>
  );
};

export default MailItem;
