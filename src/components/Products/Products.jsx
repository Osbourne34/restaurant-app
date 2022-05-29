import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToOrder } from './../../store/orderSlice';

import './products.scss';

import Product from './../Product';

const Products = () => {
    const dispatch = useDispatch();
    const currentCategory = useSelector(
        (state) => state.categories.currentCategory,
    );
    const { products } = useSelector((state) => state.products);

    const filterProductsByCategory = products.filter((product) => {
        if (product.category === currentCategory) return true;
    });

    const onAddProductToOrder = (product) => {
        dispatch(addProductToOrder(product));
    };

    return (
        <div className='products'>
            {filterProductsByCategory.map((product) => {
                return (
                    <Product
                        key={product.id}
                        {...product}
                        onAddProductToOrder={() => onAddProductToOrder(product)}
                    />
                );
            })}
        </div>
    );
};

export default Products;
