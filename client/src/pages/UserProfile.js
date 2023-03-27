import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const UserProfile = () => {
  return (
    <Container  className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 200 }}>
      <Card >
        <div className="input-group mb-3">
          <Button>
            Настройки
          </Button>
        </div>
      </Card>
    </Container>
   
  );
};

export default UserProfile;