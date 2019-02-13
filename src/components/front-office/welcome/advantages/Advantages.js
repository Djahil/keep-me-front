import React from 'react';
import AdvantageCard from './AdvantageCard';
import { Container, Row } from 'react-bootstrap'
import './Advantages.scss';

import chronoIcon from '../../../../assets/img/icons/welcome/icon-chrono.svg';
import qualityIcon from '../../../../assets/img/icons/welcome/icon-quality.svg';
import visitCardIcon from '../../../../assets/img/icons/welcome/icon-visit-card.svg';

const Advantages = () => {
    
    const cards = [
        {
            icon: chronoIcon,
            title: 'Résultat immédiat',
            text: 'Paramétrez vos carte de visites et partagez les sans perdre un instant.'
        },
        {
            icon: qualityIcon,
            title: 'L\'engagement Keep Me',
            text: 'Nous remuons ciel et terre pour que vous soyez satisfaits !'
        },
        {
            icon: visitCardIcon,
            title: 'Faites nous confiance',
            text: 'Nous veillons à vous satisfaire et à créer une relation de confiance pour travailler avec vous sur le long terme.'
        }
    ]

    const cardsList = cards.map((card) => {
        return( <AdvantageCard icon={card.icon} title={card.title} text={card.text} />)
    })

    return (
        <Container>
            <Row  id="card-container-inner">
                {cardsList}
            </Row>
        </Container>
    );
}
export default Advantages;