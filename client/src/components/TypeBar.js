import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const TypeBar = observer(() => {
  const {mailStore, userStore} = useContext(Context)
  const idUserAuth = userStore.user.id;

  function AllMess(){
    // let msgs = mailStore.msg.filter(item =>idUserAuth === item.userIdUser || item.user_creator);

  }
  function NewMess(){
  
  }
  function SendMess(){
  
  }
  function TakeMess(){
  
  }
  function DelMess(){
  }

  return (
    <div id="typebar" className="container">
      <div className="col">
        <div className="d-flex flex-column">
          <button type="button" className="btn btn-outline-dark btn-lg ms-1" onClick={AllMess()}>Все сообщения</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-4" onClick={NewMess()}>Новые</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1" onClick={SendMess()}>Отправленные</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1" onClick={TakeMess()}>Полученные</button>
          <button type="button" className="btn btn-outline-danger ms-1 mt-3 mb-2" onClick={DelMess()}>Корзина</button>
        </div>
      </div>

    </div>    
      );
});

export default TypeBar;