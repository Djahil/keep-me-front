import React from 'react';
import ProductCard from './ProductCard';

import image from '../../../../assets/img/pictures/cardsAmbiance.png';

const products = {
        image: image,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad'
}

const Products = () => (
        <ProductCard image={products.image} title={products.title} text={products.text} />
);

export default Products;
