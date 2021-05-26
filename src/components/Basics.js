import React from "react";
import Col from "react-bootstrap/Col";
import "./basics.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Basics(props) {
  return (
    <div id="basicsContainer" className="col m-5 p-5 shadow-lg bg-dark">
      <h1 className="p-2" id="basicsHeading" style={{ color: "white" }}>
        Blockchain Basics
      </h1>
      <hr />
      <Accordion>
        <Card bg="dark" text="info" border="info">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is a blockchain?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul className="list">
                <li>
                  A blockchain can be thought of as a giant ledger which records
                  transactions.
                </li>
                <li>
                  Transactions are added to the blockchain by a group of people.
                  These people are called miners.
                </li>
                <li>
                  To ensure that all transactions on the blockchain are
                  accurate, a copy of the blockchain is stored on many computers
                  around the world and this system of computers checks to ensure
                  that the blockchain is the same on all the computers. This
                  ensure that no miner can destroy the integrity of the
                  blockchain.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="success" border="success">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is a crypto currency?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1" id="blockchain">
            <Card.Body>
              <ul className="list">
                <li>
                  A cryptocurrency is a digital currency for which all
                  transactions are stored on a blockchain.
                </li>
                <li>
                  A cryptocurrency can be valuable because it can be used for
                  transactions on a blockchain.
                </li>
                <li>
                  Another reason that cryptocurrencies like Bitcoin and Ethereum
                  are valuable is because they are deflationary. This means that
                  they are not subject to inflation like most other currencies
                  are.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="danger" border="danger">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is a NFT?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul className="list">
                <li>
                  An NFT is a <i>Non-Fungible Token</i>.
                </li>
                <li>"Non-fungible" means that it is unique, one of a kind.</li>
                <li>
                  An NFT is unique token for which transactions can be recorded
                  on the blockchain.
                </li>
                <li>
                  This token can be art like a graphic, music or video and as it
                  is created and then bought/sold these transactions are
                  recorded on the blockchain.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="info" border="info">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              Why is the blockchain useful?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul className="list">
                <li>
                  The Blockchain has many applications and because it is
                  relatively new in the world, there are new applications been
                  created as you read this.
                </li>
                <li>
                  A blockchain like Ethereum is programmable which means that
                  developers can create smart contract which enable trustless
                  transactions.
                </li>
                <li>
                  A smart contract is a agreement which can be triggered by
                  specified conditions and is then executed automatically by
                  code.
                </li>
                <li>
                  The conditions for the agreement and the action executed are
                  built into the code.{" "}
                </li>
                <li>
                  Exchanging cryptocurrencies and NFTs are some of the
                  transactions you can do on a blockchain. There are exchanges,
                  lending mechanism, savings accounts, betting markets, social
                  networks and much more on blockchains.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="success" border="success">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is 'open-source'?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul className="list">
                <li>
                  Open-source software is software for which the code in
                  publicly available and usable.
                </li>
                <li>
                  Open-source projects often has many people who aren't
                  necessarily connected to each other working on them.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="danger" border="danger">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is a 'decentralized?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <ul className="list">
                <li>
                  Decentralized means that that there is no central authority
                  controlling everything.
                </li>
                <li>
                  It means that each user can interact directly with the
                  blockchain network, that code is open-source and that all data
                  is publicly available.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="info" border="info">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="6">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is a node?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <ul className="list">
                <li>
                  In the context of blockchain, a network is number of computers
                  which are connected to form a system. These computers are
                  referred to as nodes.
                </li>
                <li>
                  Each node can be thought of as an access point to the network.
                  A node allows you to interact with the network.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Basics;
