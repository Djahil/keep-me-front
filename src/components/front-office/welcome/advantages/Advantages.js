import React, { Component } from 'react';
import AdvantageCard from './AdvantageCard';
import { Container, Row } from 'react-bootstrap'
import './Advantages.scss';

import icon from '../../../../assets/img/keep-me-logo-coral.svg'

const cards = {
    card1: {
        icon: icon,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad'
    },
    card2: {
        icon: icon,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad'
    },
    card3: {
        icon: icon,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad'
    }
}

class Advantages extends Component {
    render() {
        return(
            <Container>
                <Row  id="card-container-inner">
                    <AdvantageCard icon={cards.card1.icon} title={cards.card1.title} text={cards.card1.text} />
                    <AdvantageCard icon={cards.card2.icon} title={cards.card2.title} text={cards.card2.text} />
                    <AdvantageCard icon={cards.card3.icon} title={cards.card3.title} text={cards.card3.text} />
                </Row>
            </Container>
        );
    }
}

export default Advantages;