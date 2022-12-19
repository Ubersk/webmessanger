import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import FunctionBar from "../components/FunctionBar";

const Mail = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={3}>
          <FunctionBar/>
        </Col>
      </Row>
    </Container>
  );
};

export default Mail;