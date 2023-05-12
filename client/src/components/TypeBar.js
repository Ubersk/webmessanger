import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const TypeBar = observer(() => {
  const {mailStore} = useContext(Context)

function AllMess(){

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
          <button type="button" className="btn btn-outline-dark btn-lg ms-1" onClick={NewMess()}>Все сообщения</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-4">Новые</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1">Отправленные</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1">Полученные</button>
          <button type="button" className="btn btn-outline-danger ms-1 mt-3 mb-2">Корзина</button>
        </div>
      </div>

    </div>    
      );
});

export default TypeBar;