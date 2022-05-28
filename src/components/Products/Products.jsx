import React from 'react';
import { useSelector } from "react-redux";

import './products.scss';

import Product from './../Product';

const Products = () => {
    const currentCategory = useSelector(state => state.categories.currentCategory);
    const { products } = useSelector(state => state.products);

    const filterProductsByCategory = products.filter(product => {
        if (product.category === currentCategory) return true;
    })

    return (
        <div className="products">
            {filterProductsByCategory.map((product) => {
                return <Product key={product.id} {...product} />
            })}
        </div>
    )
}

export default Products;