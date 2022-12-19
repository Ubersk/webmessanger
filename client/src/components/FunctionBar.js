import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Button, ButtonGroup, ButtonToolbar, Form,} from "react-bootstrap";

const FunctionBar = observer(() => {
  const {mail} = useContext(Context)
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
      <ButtonGroup className="ms-lg-5 dropdown-center p-2" aria-label="Second group">
        <Button>Создать</Button>
        <Button>Ответить</Button>
        <Button>Переслать</Button>
        <Button>Удалить</Button>
      </ButtonGroup>
      </Form>


  </ButtonToolbar>
  );
});

export default FunctionBar;