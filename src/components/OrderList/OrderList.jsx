import React from 'react';
import { useSelector } from 'react-redux';

import './order-list.scss';

import OrderItem from './../OrderItem';

const OrderList = () => {
    const { products } = useSelector((state) => state.order);

    return (
        <div className='order-list'>
            {products.length > 0 ? (
                <ul className='order-list_items'>
                    {products.map((product) => {
                        return <OrderItem key={product.id} {...product} />;
                    })}
                </ul>
            ) : (
                <h1 className='order-list__empty'>Список пуст</h1>
            )}
        </div>
    );
};

export default OrderList;
