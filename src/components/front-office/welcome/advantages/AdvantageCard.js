import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './AdvantageCard.scss';

class AdvantageCard extends Component {

    render() {
        return (
            <Card className="advantage-card">
                <Card.Img variant="top" src={this.props.icon} className="img-card" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }    
}

export default AdvantageCard;