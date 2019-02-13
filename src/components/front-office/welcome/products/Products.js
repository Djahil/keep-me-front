import React, { Component } from 'react';
import ProductCard from './ProductCard';

import image from '../../../../assets/img/cardsAmbiance.png';

const products = {
    product1: {
        image: image,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad'
    }
}

class Products extends Component {
    render() {
      return (
        <ProductCard image={products.product1.image} title={products.product1.title} text={products.product1.text} />
      );
    }
}

export default Products;
