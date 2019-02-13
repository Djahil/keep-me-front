import React from 'react';
import { Card } from 'react-bootstrap';

import './ProductCard.scss'

const ProductCard = ({ image, title, text }) => (
    <Card className="product-card">
        <Card.Img src={ image } alt="Card image" className="product-card-img" />
        <Card.ImgOverlay>
            <div className="text-center">
                <Card.Title>{ title }</Card.Title>
                <Card.Text>{ text }</Card.Text>
            </div>
        </Card.ImgOverlay>
    </Card>
);

export default ProductCard;
