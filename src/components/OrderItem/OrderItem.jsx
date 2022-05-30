import React from 'react';
import { useDispatch } from 'react-redux';
import {
    removeProductFromOrder,
    decreaseProduct,
    increaseProduct,
} from './../../store/orderSlice';

import './order-item.scss';

const OrderItem = ({ id, title, price, amount }) => {
    const dispatch = useDispatch();

    const onRemoveProduct = (id) => {
        dispatch(removeProductFromOrder(id));
    };

    const onDecreaseProduct = (id) => {
        dispatch(decreaseProduct(id));
    };

    const onIncreaseProduct = (id) => {
        dispatch(increaseProduct(id));
    };

    return (
        <li className='order-item'>
            <div className='order-item__info'>
                <div className='order-item__inner'>
                    <h4>{title}</h4>
                    <p>
                        {new Intl.NumberFormat('ru-RU').format(price * amount)}{' '}
                        сум
                    </p>
                </div>
                <div className='order-item__counter'>
                    <button
                        onClick={() => onIncreaseProduct(id)}
                        className='order-item__counter-btn decrease'>
                        -
                    </button>
                    <p className='order-item__amount'>{amount}</p>
                    <button
                        onClick={() => onDecreaseProduct(id)}
                        className='order-item__counter-btn increase'>
                        +
                    </button>
                </div>
            </div>
            <button
                onClick={() => onRemoveProduct(id)}
                className='order-item__remove-btn'>
                Удалить
            </button>
        </li>
    );
};

export default OrderItem;
