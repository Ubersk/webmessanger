import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MAIL_ROUTES} from "../utils/consts";


const DeleteUsers = () => {
const navigate = useNavigate();

  return (
    <Container className=" mt-5 d-flex justify-content-center">
    <Col>
    <div>
       <div
       className="mx-3 d-flex justify-content-center">
       <Button className="mt-3 me-4 mb-3" onClick={() => navigate(MAIL_ROUTES)}>Назад</Button>
         <Col>
       <h4 className="border-bottom d-flex justify-content-center">Выберите пользователя для удаления</h4>
       <label>Пример меню выбора</label>
       <select multiple class="form-control" id="exampleFormControlSelect1"></select>

         </Col>
       </div>
     </div>
     </Col>
     </Container>
   
  );
};

export default DeleteUsers;