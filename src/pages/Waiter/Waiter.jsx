import React from 'react';

import './waiter.scss';

import Category from '../../components/Category';
import Products from '../../components/Products';
import Order from '../../components/Order';

const Waiter = () => {
    return (
        <div className="waiter">
            <div className="container">

                <div className="waiter__wrapper">
                    <div className="waiter__main">
                        <Category />
                        <Products />
                    </div>

                    <Order />

                </div>
            </div>
        </div>
    )
}

export default Waiter;