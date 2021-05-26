import React from "react";
import Col from "react-bootstrap/Col";
import "./basics.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./buying.css";

function Buying(props) {
  return (
    <div id="basicsContainer" className="col m-5 p-5 shadow-lg bg-dark">
      <h1 id="basicsHeading" style={{ color: "white" }}>
        Trading on the Blockchain
      </h1>
      <hr />
      <Accordion>
        <Card bg="dark" text="info" border="info">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What can I buy on the blockchain?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p style={{ fontSize: "20px" }}>
                Using cryptocurrencies, you can do different kinds of
                transactions. These include, but are not limited to:{" "}
              </p>
              <ul className="list">
                <li>Trading cryptocurrencies</li>
                <li>Investing into savings accounts</li>
                <li>Borrowing money</li>
                <li>Buying NFTs</li>
                <li>Betting markets</li>
                <li>Crypto social networks</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="success" border="success">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              Where can I transact on the blockchain?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul className="list">
                <li>
                  To transact on a blockchain you need to own an amount of at least one cryptocurrency.
                </li>
                <li>
                  Cryptocurrencies can be bought in a similar way to how you buy
                  non-digital currencies - You need an exchange.
                </li>
                <li>
                  One of the most prominent exchanges is Coinbase but there are
                  others.
                </li>
                <li>
                  When you open an account you will be given a seed phrase
                  and there will be an address of your account/wallet. These are important pieces of
                  information. Please see our questions on them.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="danger" border="danger">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is the difference between a crypto exchange and a crypto
              wallet?
            </b>
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul className="list">
                <li>An exchange is where you can buy/sell cryptocurrencies.</li>
                <li>
                  A wallet is where you can hold cryptocurrencies so that your
                  funds are completely under your control.
                </li>
                <li>
                  There are digital ("hot") wallets and physical ("cold")
                  wallets. They offer different levels of security for securing
                  your funds. Before buying a wallet, do research into which one
                  to buy.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="info" border="info">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What are "gas" fees?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul className="list">
                <li>
                  Gas fees are network transaction fees for transacting on a
                  blockchain.
                </li>
                <li>
                  These fees are paid to the miner who processes the
                  transaction and they fluctuate based on the computing energy
                  required to process the transaction.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="success" border="success">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is a seed phrase?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <ul className="list">
                <li>
                  A seed phrase is a computer-generated phrase which contains all the
                  necessary information to access your account.
                </li>
                <li>
                  This means that the person who has this phrase can access your
                  crypto wallet/account and transact.
                </li>
                <li>
                  Because this phrase has so much power, the crypto
                  exchanges/wallets do not have access to your passphrase.
                </li>
                <li>
                  If you lose your seed phrase and get locked out of an account
                  you will not be able to get it back.{" "}
                </li>
                <li>
                  Your seed phrase needs to be stored securely and preferably
                  not in a digital format. It should be written down on a piece
                  of paper or something similar.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" text="danger" border="danger">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
            <b className="basicsQuestion" style={{ color: "aliceBlue" }}>
              What is the address of my wallet?
            </b>{" "}
            <br />
            Click for the answer!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul className="list">
                <li>
                  The address of a wallet/account is how the blockchain
                  recognizes a user.
                </li>
                <li>
                  Addresses are usually long and complicated-looking pieces of
                  text.
                </li>
                <li>
                  Because each cryptocurrency is traded on its own blockchain
                  you will have a wallet and address for each cryptocurrency you
                  own.
                </li>
                <li>
                  This address is what other can use to send cryptocurrency to
                  you. Make sure that the address you provide the sender is the
                  for the wallet of cryptocurrency they are sending.
                </li>
                <li>
                  If you want to transfer your cryptocurrency from one
                  exchange/wallet to another, you'll to look in your account on
                  the receiving platform to find the address of that wallet.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Buying;
