import React from 'react';
import { Container, Row } from 'react-bootstrap'
import AdvantageCard from './AdvantageCard';

import './Advantages.scss';

import advantagesCards from '../../../../assets/data/advantagesCards';

const cardsList = advantagesCards.map((advantagesCard) => {
    return( <AdvantageCard key={advantagesCard.id}
                           icon={advantagesCard.icon}
                           title={advantagesCard.title}
                           text={advantagesCard.text} />)
})

const Advantages = () => (
    <Container>
        <Row  id="card-container-inner">
            {cardsList}
        </Row>
    </Container>
)
export default Advantages;