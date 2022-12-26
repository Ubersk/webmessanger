import React, {useContext, useEffect, useState} from "react";
import { Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import FunctionBar from "../components/FunctionBar";
import MailList from "../components/MailList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {fetchMsg, fetchTypes} from "../http/mailAPI";
import {fetchAllUsers, fetchOneUser} from "../http/UserAPI";

const Mail = observer(() => {
  const { mailStore, userStore } = useContext(Context);
  useEffect(() => {
    fetchTypes().then(data => {
      mailStore.setTypes(data)})
    fetchMsg().then(data => {
      mailStore.setMsg(data)})
    fetchOneUser().then(data =>{
      userStore.setUser(data)
    } )
    fetchAllUsers().then(data => {
      userStore.setUsers(data);
    })

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
