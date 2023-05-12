import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const TypeBar = observer(() => {
  const {mailStore} = useContext(Context)

function HowFolder(){
  const key = 1;
  switch (key) {
    case 1:
      function AllMess(){
        
      }
      
      break;

    case 2:
      function NewMess(){
        
      }

    break;

    case 3:
      function SendMess(){
        
      }

      break;

    case 4:
      function TakeMess(){
        
      }

    break;

    case 5:
      function DelMess(){
       
      }
    break;
    default:
      break;
  }
}

  return (
    <div id="typebar" className="container">
      <div className="col">
        <div className="d-flex flex-column">
          <button type="button" className="btn btn-outline-dark btn-lg ms-1" onClick={HowFolder(1)}>Все сообщения</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-4" onClick={HowFolder(2)}>Новые</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1" onClick={HowFolder(3)}>Отправленные</button>
          <button type="button" className="btn btn-outline-primary ms-1 mt-1" onClick={HowFolder(4)}>Полученные</button>
          <button type="button" className="btn btn-outline-danger ms-1 mt-3 mb-2" onClick={HowFolder(5)}>Корзина</button>
        </div>
      </div>

    </div>    
      );
});

export default TypeBar;