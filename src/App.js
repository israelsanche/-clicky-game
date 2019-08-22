import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import clickyGame from "./pages/clickyGame";

import Footer from "./components/Footer";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <Router>
      <div>
       
        <Container>
          <Col md={12}>
          <Route exact path="/" component={clickyGame} />
          </Col>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
