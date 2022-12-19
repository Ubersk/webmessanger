import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MailPage from "../pages/MailPage";
import { MESSAGE_ROUTES } from "../utils/consts";
const MailItem = ({mail}) => {
  const navigate = useNavigate()
  return (
    <Col md={8}
    className="d-flex flex-fill mt-3"
    onClick={()=> navigate(MESSAGE_ROUTES + '/' + mail.id)}>
      <Card
        style={{minHeight:100, cursor:'pointer'}} border={"warning"}  >

        <div className="d-flex justify-content-between  mt-3 ">
          <div>Автор: {mail.author}</div>
          <div>Тема: {mail.name}</div>
          <div>{mail.msg_body}</div>
          <div className="d-flex blockquote-footer">
            {mail.dateCreate}
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default MailItem;