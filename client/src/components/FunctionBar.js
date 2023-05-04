import React from "react";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import { CREATE_MSG_ROUTES} from "../utils/consts";

const FunctionBar = observer(() => {
  const navigate = useNavigate();
  return (

  <div class="container">
    <div class="row">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Введите для поиска" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Поиск</button>
            </div>
        </div>
          <div>
            <button type="button" class="btn btn-outline-success btn-sm" onClick={() => navigate(CREATE_MSG_ROUTES)}>Создать</button>
            <button type="button" class="btn btn-outline-primary btn-sm ms-1" onClick={() => navigate()}>Ответить</button>
            <button type="button" class="btn btn-outline-primary btn-sm ms-1" onClick={() => navigate()}>Переслать</button>
            <button type="button" class="btn btn-outline-danger btn-sm ms-1" onClick={() => navigate()}>Удалить</button>
          </div>
    </div>
  </div>
  );
});

export default FunctionBar;