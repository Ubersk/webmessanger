import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import MailStore from "../store/MailStore";
const TypeBar = observer(() => {
  const {mailStore, userStore} = useContext(Context)

  
  return (
    <div id="typebar" className="container">
      <div className="col">
        <div className="d-flex flex-column">
          <button type="button" className="btn btn-outline-dark btn-lg ms-1" onClick={() => 1}>Все сообщения</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-4" onClick={() => 2}>Новые</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1" onClick={() => 3}>Отправленные</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1" onClick={() => 4}>Полученные</button>
          <button type="button" className="btn btn-outline-danger ms-1 mt-3 mb-2" onClick={() => 5}>Корзина</button>
        </div>
      </div>
    </div>
  );
});
export default TypeBar;