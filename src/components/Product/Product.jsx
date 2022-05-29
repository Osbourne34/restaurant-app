import React from 'react';

import './product.scss';

const Product = ({ id, title, price }) => {
    return (
        <div className='product'>
            <div className='product__inner'>
                <h3 className='product__title'>{title}</h3>
                <div>{price} сум</div>
            </div>
            <button className='product__add-btn'>Добавить</button>
        </div>
    );
};

export default Product;
