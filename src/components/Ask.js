import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

function Ask(props) {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changeText(e) {
    setText(e.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_es1cqia",
        "template_8gxugiy",
        {
          email,
          text,
          reply_to: "mordigold97@gmail.com",
        },
        "user_PNUNtkHioV8QSyrfGbkgX"
      )
      .then(
        (result) => {
          alert("You message has been sent! Thank you :)");
        },
        (error) => {
          alert(
            "Your message failed to send! Please contact us directly via email: mordigold97@gmail.com"
          );
        }
      );
  }

  return (
    <div className=" col m-5 p-5 shadow-lg bg-white">
      <h1 id="basicsHeading">Did we miss something?</h1>
      <hr />
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
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Ask;
