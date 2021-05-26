import React from "react";
import Col from "react-bootstrap/Col";
import "./basics.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Other(props) {
  return (
    <div id="basicsContainer" className="col m-5 p-5 shadow-lg bg-dark">
      <h1 id="basicsHeading" style={{ color: "white" }}>
        Other Blockchain Questions
      </h1>
      <hr />
      <Accordion>
        <Card bg="dark" text="info" border="info">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is Defi?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Answer coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="success" border="success">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is a DAO?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Answer coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="danger" border="danger">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              How can I learn to code on the blockchain?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Answer coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="info" border="info">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is Bitclout?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Answer coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="success" border="success">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is Uniswap?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Answer coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="danger" border="danger">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              Where are some good places to learn about blockchain and crypto?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Answer coming soon...</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Other;
