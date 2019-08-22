import React from "react";
import "./style.css";
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function FriendCard(props) {
  return (

    <Col xs={2} md={2}>
      <Image
        rounded
        variant="top"
        role="img"
        aria-label="pic item"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
        className={`pic-item`}
      />


    </Col>
  );
}

export default FriendCard;



