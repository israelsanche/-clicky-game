import React, { Component } from "react";
import FriendCard from "../components/FriendCard";
import data from "../friends.json";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./style.css";
import Nav from "../components/Navbar";

class clickyGame extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.iconShuffle(this.state.data) });
  }



  reset = data => {
    const reset = data.map(item => ({ ...item, clicked: false }));
    return this.iconShuffle(reset);
  };

  iconShuffle = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.correctAnswer(newData)
      : this.incorrectAnswer(newData);
  };

  correctAnswer = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      data: this.iconShuffle(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  incorrectAnswer = data => {
    alert("Incorrect Answer");
    this.setState({
      data: this.reset(data),
      score: 0
      
    });
  };



  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Container>
          <Row>
            <Col md={12}>
              <Card className="bg-light text-black bold">
                <Card.Header className="text-center">Clickster-Game</Card.Header>
                <Card.Img className="jumbo-pic" src="https://cl.goliath.com/image/upload/t_tn,f_auto,q_auto,$h_375,$w_1050/go/2016/04/Looney-tunes-characters-the-free-542314-1050x375.jpg" alt="Card image" />
                <Card.Footer className="text-center">Click on an image to earn points, but don't click on any more than once! </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
         
            {this.state.data.map(item => (
              <FriendCard
              key={item.id}
              id={item.id}
              handleClick={this.handleItemClick}
              image={item.image}

              />
            ))}
        
          </Row>
        </Container>

      </div>
    );
  }
}

export default clickyGame;
