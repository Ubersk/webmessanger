import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import { CREATE_MSG_ROUTES, MAIL_ROUTES} from "../utils/consts";
import React, { useContext, useState } from "react";
import { Context } from "../index";


const FunctionBar = observer(() => {
  const navigate = useNavigate();
  const { mailStore, userStore } = useContext(Context);

  function EventWindow (){
  const result = prompt();
  }

  function Refresh (){
    navigate (MAIL_ROUTES);

  }
  const [search_text, setSearch] = useState("")
  mailStore.setSearch(search_text);

  function Search (){
    mailStore.setSearch({});
    mailStore.setSearch(search_text);

  }
 

  return (
  <div className="container">
    <div className="row">
        <div className="input-group mb-3">
          <input 
          type="text" 
          className="form-control" 
          placeholder="Введите для поиска"
          value={search_text}
          onChange={(e) => setSearch(e.target.value)}/>
            <div className="input-group-append">
            <button 
            className="btn btn-outline-secondary" 
            type="button"
            onClick={() => Search()}>Поиск</button>
            </div>
        </div>
          <div>
            <button type="button" className="btn btn-success btn-sm" onClick={() => navigate(CREATE_MSG_ROUTES)}>Создать</button>
            {/* <button className="m-1 btn btn-warning text-white btn-sm" onClick={() => EventWindow()}>Глобальное сообщение</button> */}
            <a className="m-1 btn btn-primary text-white btn-sm" href="/">Обновить</a>
            

          </div>
    </div>
  </div>
  );
});

export default FunctionBar;