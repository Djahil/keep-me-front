import React, { Component } from 'react';
import AdvantageCard from './AdvantageCard';
import { Container, Row } from 'react-bootstrap'
import './Advantages.scss';

class Advantages extends Component {
    render() {
        return(
            <Container>
                <Row  id="card-container-inner">
                        <AdvantageCard />
                        <AdvantageCard />
                        <AdvantageCard />
                </Row>
            </Container>
        );
    }
}

export default Advantages;