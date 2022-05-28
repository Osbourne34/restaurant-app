import React from 'react';
import {useSelector} from "react-redux";

import './order-list.scss';

import OrderItem from './../OrderItem';

const OrderList = () => {
    const {products} = useSelector(state => state.order);

    return (
        <>
            {products.length > 0 ?
                <ul className="order-list">
                    {products.map(product => {
                        return <OrderItem key={product.id} {...product} />
                    })}
                </ul>
                :
                <p>Список пуст</p>
            }
        </>
    )
}

export default OrderList;