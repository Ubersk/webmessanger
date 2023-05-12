import React from "react";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import { CREATE_MSG_ROUTES, MAIL_ROUTES} from "../utils/consts";
import { Button } from "react-bootstrap";

const FunctionBar = observer(() => {
  const navigate = useNavigate();

  function EventWindow (){
  const result = prompt();
  }
  return (

  <div className="container">
    <div className="row">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Введите для поиска" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Поиск</button>
            </div>
        </div>
          <div>
            <button type="button" className="btn btn-success btn-sm" onClick={() => navigate(CREATE_MSG_ROUTES)}>Создать</button>
            <button className="m-1 btn btn-warning text-white btn-sm" onClick={() => EventWindow()}>Глобальное сообщение</button>
            <button className="m-1 btn btn-primary text-white btn-sm" onClick={() => navigate(MAIL_ROUTES)}>Обновить</button>

          </div>
    </div>
  </div>
  );
});

export default FunctionBar;