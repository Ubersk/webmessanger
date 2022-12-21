import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import FunctionBar from "../components/FunctionBar";
import MailList from "../components/MailList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTypes } from "../http/mailAPI";

const Mail = () => {
  // const { mail } = useContext(Context);

  // useEffect(() => {
  //   fetchTypes().then(data => mail.setTypes(data))
  // }, [])

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
};
export default Mail;
