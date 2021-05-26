import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

function Ask(props) {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [reason, setReason] = useState(
    "I want to be notified when more content is added"
  );
  const [buttonType, setButtonType] = useState("primary");
  const [showSent, setShowSent] = useState(false);
  const [showSending, setShowSending] = useState(false);
  const [showError, setShowError] = useState(false);

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changeText(e) {
    setText(e.target.value);
  }

  function changeReason(e) {
    setReason(e.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();

    setButtonType("info");
    setShowSending(true);

    emailjs
      .send(
        "service_es1cqia",
        "template_8gxugiy",
        {
          email,
          text,
          reason,
          reply_to: "mordigold97@gmail.com",
        },
        "user_PNUNtkHioV8QSyrfGbkgX"
      )
      .then(
        (result) => {
          setShowSending(false);
          setButtonType("primary");
          setShowSent(true);
          setEmail("");
          setText("");
          setReason("I want to be notified when more content is added");
        },
        (error) => {
          setShowSending(false);
          setButtonType("primary");
          setShowError(true);
          setEmail("");
          setText("");
          setReason("I want to be notified when more content is added");
        }
      );
  }

  return (
    <div className=" col m-5 p-5 shadow-lg bg-white">
      <h1 id="basicsHeading">Did we miss something?</h1>
      <hr />
      <p>
        Do you want to be <b>notified when we add more content?</b>
      </p>
      <p>
        Do you have a <b>question we haven't answered</b> or an{" "}
        <b>awesome blockchain project</b> you can tell us about?
        <br />
        <br /> We can't wait to hear from you!
      </p>
      <hr />
      <Form id="myForm" onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={changeEmail}
            value={email}
            type="email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>What can we help you with?</Form.Label>
          <Form.Control as="select" onChange={changeReason} value={reason}>
            <option>I want to be notified when more content is added</option>
            <option>I have a question</option>
            <option>
              There is a cool blockchain project I want to tell you about
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            What is your question? Tell us about an awesome blockchain project!
          </Form.Label>
          <Form.Control
            onChange={changeText}
            value={text}
            as="textarea"
            rows={10}
            required
          />
        </Form.Group>
        <Alert
          variant="success"
          onClose={() => setShowSent(false)}
          dismissible
          show={showSent}
        >
          <Alert.Heading>Message sent!</Alert.Heading>
          <p>Thank you for reaching out! We'll be in touch shorty.</p>
        </Alert>
        <Alert
          variant="danger"
          onClose={() => setShowError(false)}
          dismissible
          show={showError}
        >
          <Alert.Heading>Oh no! Something went wrong.</Alert.Heading>
          <p>
            Your message failed to send. We apologize for the inconvenience.
            Could you please try again in a few minutes?
          </p>
        </Alert>
        <Alert
          variant="warning"
          onClose={() => setShowSending(false)}
          show={showSending}
        >
          Sending... Thank you for your patience!
        </Alert>
        <Button variant={buttonType} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Ask;
