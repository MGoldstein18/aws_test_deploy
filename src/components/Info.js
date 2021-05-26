import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Basics from "./Basics.js";
import Buying from "./Buying.js";
import Other from "./Other.js";
import Ask from "./Ask.js";
import "./info.css";

function Info(props) {
  return (
    <div className="container">
      <div className="row justify-content-center" >
        <Basics />
        <Buying />
      </div>
      <div className="row justify-content-center">
        <Other />
        <Ask />
      </div>
    </div>
  );
}

export default Info;
