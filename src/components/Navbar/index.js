import React from "react";
import "./style.css";
import NavMessage from "../NavMessage";
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbarclicky(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Col xs={4}>
        <Navbar.Brand href="/">Clickster</Navbar.Brand>
      </Col>
      <Col xs={4}className="text-center">
      <Navbar.Brand>
        <NavMessage score={props.score} topScore={props.topScore} />
        </Navbar.Brand>
      </Col>
      <Col xs={4} className="text-right">
      <Navbar.Brand>Score: {props.score} | Top Score: {props.topScore}</Navbar.Brand>
      </Col>



    </Navbar>
  );
}

export default Navbarclicky;
