import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';

import './Intro.scss';

const Intro  = () => (
    <Jumbotron fluid 
               id="intro">
        <Container>
            <h1 className="main-title-welcome">
                Achetez votre super carte aujourd'hui et bénéficiez de 30% de réduction !
            </h1>
            <Button>
                Commander
            </Button>
        </Container>
    </Jumbotron>
);

export default Intro;
