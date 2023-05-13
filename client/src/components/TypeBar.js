import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";



export function MailFolder(value){
  let folder = value;
  console.log(folder);
  return folder
}


const TypeBar = observer(() => {
  const {mailStore, userStore} = useContext(Context)

  return (
    <div id="typebar" className="container">
      <div className="col">
        <div className="d-flex flex-column">
          <button type="button" className="btn btn-outline-dark btn-lg ms-1" onClick={() => MailFolder(1)}>Все сообщения</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-4" onClick={() => MailFolder(2)}>Новые</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1" onClick={() => MailFolder(3)}>Отправленные</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1" onClick={() => MailFolder(4)}>Полученные</button>
          <button type="button" className="btn btn-outline-danger ms-1 mt-3 mb-2" onClick={() => MailFolder(5)}>Корзина</button>
        </div>
      </div>
    </div>
  );
});

export default TypeBar;