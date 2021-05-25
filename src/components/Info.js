import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Basics from "./Basics.js";
import Buying from "./Buying.js";
import Other from "./Other.js";
import Ask from "./Ask.js";
import "./info.css";

function Info(props) {
  return (
    <Container>
      <Row>
        <Col sm>
          <Basics />
        </Col>
        <Col sm>
          <Buying />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <Other />
        </Col>
        <Col sm>
          <Ask />
        </Col>
      </Row>
    </Container>
  );
}

export default Info;
