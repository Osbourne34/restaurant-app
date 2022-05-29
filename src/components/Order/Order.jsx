import React from 'react';

import './order.scss';

import OrderList from './../OrderList';
import OrderType from '../OrderType';

const Order = () => {
    return (
        <div className='order'>
            <h2>Заказ</h2>

            <OrderList />

            <div className='order__bottom'>
                <OrderType />

                <div className='order__total-price'>
                    <h4>Цена: </h4>
                    <h4>132000 сум</h4>
                </div>

                <div className='order__buttons'>
                    <button className='order__order-btn'>Заказ</button>
                    <button className='order__reset-btn'>Очистить</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
