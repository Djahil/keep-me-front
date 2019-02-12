import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import logo from '../../../assets/img/keep-me-logo-coral.svg'
import './AdvantageCard.scss';

class AdvantageCard extends Component {

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={logo} className="img-card" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur earum aperiam rem, nulla quis corrupti animi accusantium eligendi facilis, accusamus tenetur error? Cumque nulla voluptatum odio quidem distinctio eum reiciendis.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }    
}

export default AdvantageCard;