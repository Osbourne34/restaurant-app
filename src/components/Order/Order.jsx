import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearOrder } from './../../store/orderSlice';

import './order.scss';

import OrderList from './../OrderList';
import OrderType from '../OrderType';

const Order = () => {
    const dispatch = useDispatch();
    const { totalPrice } = useSelector((state) => state.order);

    const onClearOrder = () => {
        dispatch(clearOrder());
    };

    return (
        <div className='order'>
            <h2>Заказ</h2>

            <OrderList />

            <div className='order__bottom'>
                <OrderType />

                <div className='order__total-price'>
                    <h3>Цена: </h3>
                    <h3>
                        {new Intl.NumberFormat('ru-RU').format(totalPrice)} сум
                    </h3>
                </div>

                <div className='order__buttons'>
                    <button className='order__order-btn'>Заказ</button>
                    <button onClick={onClearOrder} className='order__reset-btn'>
                        Очистить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
