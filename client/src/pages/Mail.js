import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import FunctionBar from "../components/FunctionBar";
import MailList from "../components/MailList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {fetchMsg, fetchOneMsg, fetchTypes} from "../http/mailAPI";
import {fetchAllUsers, fetchOneUser} from "../http/UserAPI";

const Mail = observer(() => {
  const { mail, user } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => {
      mail.setTypes(data)})
    fetchMsg().then(data => {
      mail.setMsg(data)})
    fetchOneUser().then(data =>{
      user.setUser(data)
    } )

  }, [])

  return (
    <Container className="mt-3">
      <Row className="mt-3">
        <Col>
          <TypeBar />
        </Col>
        <Col>
          <FunctionBar />
          <MailList />
        </Col>
      </Row>
    </Container>
  );
});
export default Mail;
