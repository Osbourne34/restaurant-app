import React from 'react';

import './product.scss';

const Product = ({ title, price, onAddProductToOrder }) => {
    return (
        <div className='product'>
            <div className='product__inner'>
                <h3 className='product__title'>{title}</h3>
                <div>{new Intl.NumberFormat('ru-RU').format(price)} сум</div>
            </div>
            <button onClick={onAddProductToOrder} className='product__add-btn'>
                Добавить
            </button>
        </div>
    );
};

export default Product;
