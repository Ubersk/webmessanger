import React, { useState} from "react";
import { observer } from "mobx-react-lite";
import { Button, ButtonGroup, ButtonToolbar, Form,} from "react-bootstrap";
import {useHref, useNavigate} from "react-router-dom";
import { CREATE_MSG_ROUTES} from "../utils/consts";

const FunctionBar = observer(() => {
  const navigate = useNavigate();
  return (

  <ButtonToolbar  aria-label="3">
    <Form
      className="d-flex flex-row justify-content-between "
      style={{ maxHeight: '200px'}}
      >
      <Form.Control
        type="Search"
        placeholder="Поиск"
        aria-label="Search"
        style={{minWidth:`300px`}}
      />
      <Button   variant="outline-success">Поиск</Button>
      <ButtonGroup className="ms-lg-5 dropdown-center" aria-label="Second group">
        <Button  onClick={() => navigate(CREATE_MSG_ROUTES)}>Создать</Button>
        <Button >Ответить</Button>
        <Button >Переслать</Button>
        <Button >Удалить</Button>
      </ButtonGroup>
      </Form>


  </ButtonToolbar>
  );
});

export default FunctionBar;
