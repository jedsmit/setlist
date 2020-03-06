import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

function NoMatch() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Jumbotron className="no-match">
              <h1 className="text-center">404 Stage Not Found!!!</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NoMatch;