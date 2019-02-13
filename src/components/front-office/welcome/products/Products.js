import React from 'react';
import ProductCard from './ProductCard';
import products from '../../../../assets/data/products.js'

const productsList = products.map( product => (
    <ProductCard key={product.id} image={product.image} title={product.title} text={product.text} />
));

const Products = () =>(
        <>
            {productsList}
        </>
);

export default Products;
