import React from "react";
import { observer } from "mobx-react-lite";
import { Button, ButtonToolbar, Col, Form, Row } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { CREATE_MSG_ROUTES} from "../utils/consts";

const FunctionBar = observer(() => {
  const navigate = useNavigate();
  return (

  <ButtonToolbar  aria-label="3">
    <Form
      className="d-flex"
      style={{ maxHeight: '200px'}}
      >
      <Form.Control
        type="Search"
        placeholder="Поиск"
        aria-label="Search"
        style={{minWidth:`300px`}}
      />
      <Button   variant="outline-success">Поиск</Button>

        <Button  onClick={() => navigate(CREATE_MSG_ROUTES)}>Создать</Button>
        <Button >Ответить</Button>
        <Button >Переслать</Button>
        <Button >Удалить</Button>

      </Form>


  </ButtonToolbar>
  );
});

export default FunctionBar;
