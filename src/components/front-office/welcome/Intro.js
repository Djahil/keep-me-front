import React, { Component } from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

import './Intro.scss';

class Intro extends Component {
    render() {
      return (
        <Jumbotron fluid 
                   id="intro">
            <Container>
                <h1>
                    Achetez votre super carte aujourd'hui et bénéficiez de 30% de réduction !
                </h1>
                <Button>
                    Commander
                </Button>
            </Container>
        </Jumbotron>    
      );
    }
  }
  
  export default Intro;