import React from "react";
import Modal, {Form, FormControl, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
const CreateMsg = ({show, onHide}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered>
      <ModalHeader closeButton>
        <ModalTitle id={"contained-modal-title-vcenter"}>
          Создание сообщения
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormControl
          placeholder={""}/>
        </Form>
      </ModalBody>


    </Modal>
  );
};

export default CreateMsg;
