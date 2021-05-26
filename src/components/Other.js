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
              What is DeFi?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul className="list">
                <li>DeFi is short for "Distributed Finance".</li>
                <li>
                  DeFi is an umbrella terms for crypto/blockchain financial
                  applications which remove the traditional middleman in the
                  transaction.
                </li>
              </ul>
            </Card.Body>
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
            <Card.Body>
              <ul className="list">
                <li>A DAO is a "Distributed Autonomous Organization".</li>{" "}
                <li>
                  A DAO is an organization which can fully function without an a
                  traditional hierarchical management.
                </li>
                <li>
                  A DAO can be created when a group of people set rules for
                  their organization, invest financially in it by buying a token
                  of sorts which gives voting right and/or rewards and then
                  operate the organization using the predefined rules and tokens
                  to make decisions.
                </li>
              </ul>
            </Card.Body>
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
            <Card.Body>
              <ul className="list">
                <li>
                  There are many courses, blogs and tutorials which can help you
                  learn. Start Googling.
                </li>
                <li>
                  A good place to start might the{" "}
                  <a href="https://ethereum.org/en/developers/">
                    Ethereum developer docs
                  </a>
                  .
                </li>
                <li>
                  You can also check out the docs for Polygon which can be found{" "}
                  <a href="https://docs.matic.network/">here</a>.
                </li>
              </ul>
            </Card.Body>
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
            <Card.Body>
              <ul className="list">
                <li>
                  Bitclout describes itself as " a new type of social network
                  that lets you speculate on people and posts with real money,
                  and it’s built from the ground up as its own custom
                  blockchain".
                </li>
                <li>
                  This means that each user who join the platform has their own
                  creator coin which they can buy and then use to invest in
                  other users.
                </li>
                <li>
                  To learn more, please check out their{" "}
                  <a href="https://bitclout.com/">website</a>.
                </li>
              </ul>
            </Card.Body>
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
            <Card.Body>
              <ul className="list">
                <li>
                  Uniswap is a fully decentralized crypto exchange which
                  operates by executing smart contracts.
                </li>
                <li>
                  Because Uniswap is decentralized and open-source it is a
                  protocol which means that it allows people to take the
                  underlying code infrastructure and build their own version of
                  it.
                </li>
                <li>
                  It is different to a regular exchange like Coinbase because
                  the prices are set by smart contracts and you have full
                  control over you assets instead of them being in an exchange.
                </li>
                <li>
                  Additionally, Uniswap is different because it uses an
                  automated liquidity pool instead of an order book.{" "}
                  <span style={{ fontStyle: "italic", color: "orangered" }}>
                    What does that mean?
                  </span>
                  <ul style={{ marginTop: "1rem", color: "orange" }}>
                    <li>
                      It means that if you buy/sell on an exchange like
                      Coinbase, you need someone to be on the other side of your
                      trade in the Coinbase order book, ie: you need someone who
                      is buying what you are selling or someone who is selling
                      what you are buying.
                    </li>
                    <li>
                      However, Uniswap uses an automated liquidity pool which is
                      a pool of assets contributed by other users of Uniswap.
                    </li>
                    <li>
                      When you transact you are buying from/selling to this pool
                      of assets. The users who contributed assets to the pool
                      receive a part of the transaction fee of each transaction.
                    </li>
                  </ul>
                </li>
                <li>
                  For more information please check out{" "}
                  <a href="https://www.coindesk.com/what-is-uniswap-complete-guide">
                    this article
                  </a>
                  .
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Other;
