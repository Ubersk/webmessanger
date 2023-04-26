import React, {useContext, useEffect, useState} from "react";
import { Col, Container, Row} from "react-bootstrap";
import FunctionBar from "../components/FunctionBar";
import MailList from "../components/MailList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {fetchMsg, fetchTypes} from "../http/mailAPI";
import {fetchAllUsers, fetchOneUser} from "../http/UserAPI";
import TypeBar from "../components/TypeBar";

const Mail = observer(() => {
  const { mailStore, userStore } = useContext(Context);
  useEffect(() => {
    fetchMsg().then(data => {
      mailStore.setMsg(data)})
    fetchOneUser().then(data =>{
      userStore.setUser(data)
    } )
    fetchAllUsers().then(data => {
      userStore.setUsers(data);
    })
    console.log(userStore.user.name)

  }, [])

  return (
    <Container className="mt-3">
      <Row className="mt-3">
        <Col md={3}>
        <TypeBar/>
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
