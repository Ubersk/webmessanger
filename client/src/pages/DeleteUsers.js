import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MAIL_ROUTES} from "../utils/consts";
import React, { useContext, useState } from "react";
import { Context } from "../index";
import { deleteOneUser } from "../http/UserAPI";



const DeleteUsers = () => {
const {userStore, mailStore} = useContext(Context);
const navigate = useNavigate();
const [user_delete, setName] = useState("");

const  Delete = async () => {
  try {
    const users = Object.values(userStore.users);
    console.log(user_delete);
    const selecteduser = users.find(user => user.name === user_delete)
    const username = selecteduser ? selecteduser.id_user : 'Неизвестный пользователь'
    const userDelete = username;
    console.log(users);
    console.log(selecteduser);
    console.log(userDelete);
    const data = await deleteOneUser(userDelete);  
    alert("Удаление завершено")
  }
  catch (e) {
    alert("Удаление невозможно")
  }
    

}

  return (
    <Container className=" mt-5 d-flex justify-content-center">
    <Col >
    <div>
       <div
       className="mx-3 d-flex justify-content-center">
       <Button style={{ maxHeight: 40, minWidth:100 }} className="me-4 ms-2" onClick={() => navigate(MAIL_ROUTES)}>Назад</Button>
         <Col className="col-12 flex-column" >
       <h4 className="border-bottom d-flex justify-content-center">Введите пользователя для удаления</h4>
       <Form>
       <Form.Control
       value={user_delete}
       className="mt-4"
       placeholder={"Введите  пользователя"}
       onChange={(e) => setName(e.target.value)}
          />
           <Button
                  className="mt-3 col-md-12"
                  style={{ maxWidth: 200 }}
                  variant={"outline-danger"}
                  onClick={() => Delete()}
                >
                  Удалить
                </Button>
       </Form>
       
         </Col>
       </div>
     </div>
     </Col>
     </Container>
   
  );
};

export default DeleteUsers;