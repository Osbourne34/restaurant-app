import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typeSelect } from './../../store/orderSlice';

import { types } from './../../assets/database';

import './OrderType.scss';

const OrderType = () => {
    const dispatch = useDispatch();
    const typeValue = useSelector((state) => state.order.type);

    const handleTypeSelect = (type) => {
        dispatch(typeSelect(type));
    };

    return (
        <div className='order-types'>
            {types.map((type) => {
                return (
                    <label
                        className={`order-types__label ${
                            typeValue === type && 'active'
                        }`}
                        key={type}>
                        {type}
                        <input
                            className='order-types__input'
                            name='types'
                            value={type}
                            onChange={() => handleTypeSelect(type)}
                            type='radio'
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default OrderType;
