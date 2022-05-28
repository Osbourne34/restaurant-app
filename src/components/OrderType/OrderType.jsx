import React from "react";

import {types} from './../../assets/database';

import './OrderType.scss';

const OrderType = () => {
    return (
        <div className="order-types">
            {types.map(type => {
                return <label className="order-types__label" key={type}>
                    {type}
                    <input className="order-types__input" name="types" value={type} type="radio"/>
                </label>
            })}
        </div>
    )
}

export default OrderType;