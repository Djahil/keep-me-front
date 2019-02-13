import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './ProductCard.scss'

class ProductCard extends Component {
    render() {
      return (
        <Card className="product-card">
            <Card.Img src={this.props.image} alt="Card image" className="product-card-img" />
            <Card.ImgOverlay>
                <div className="text-center">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </div>
            </Card.ImgOverlay>
        </Card>
      );
    }
}

export default ProductCard;
