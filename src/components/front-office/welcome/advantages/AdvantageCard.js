import React from 'react';
import { Card } from 'react-bootstrap';
import './AdvantageCard.scss';

const AdvantageCard = ({ icon, title, text }) => (
    <Card className="advantage-card">
        <Card.Img variant="top" src={ icon } className="img-card" />
        <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>{ text }</Card.Text>
        </Card.Body>
    </Card>
);

export default AdvantageCard;