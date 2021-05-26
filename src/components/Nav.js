import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Nav(props) {
  return (
    <Navbar className="p-2 m-5" expand="lg" text="light">
      <Navbar.Brand
        style={{
          color: "white",
          fontSize: "48px",
          fontFamily: "Calibri Light",
        }}
        className="p-2"
      >
        What is the Blockchain...?
      </Navbar.Brand>
    </Navbar>
  );
}

export default Nav;

{
  /* <Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#link">Link</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar> */
}
