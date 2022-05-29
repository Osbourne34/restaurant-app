import React from 'react';

import './order-item.scss';

const OrderItem = ({ id, title, price, amount }) => {
    return (
        <li className='order-item'>
            <div className='order-item__info'>
                <div className='order-item__inner'>
                    <h4>{title}</h4>
                    <p>{price * amount} сум</p>
                </div>
                <div className='order-item__counter'>
                    <button className='order-item__counter-btn increase'>
                        +
                    </button>
                    <p className='order-item__amount'>{amount}</p>
                    <button className='order-item__counter-btn decrease'>
                        -
                    </button>
                </div>
            </div>
            <button className='order-item__remove-btn'>Удалить</button>
        </li>
    );
};

export default OrderItem;
