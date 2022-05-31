import React from 'react';
import { Link } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ id, title, category, price, quantity }) => {
    return (
        <li className='menu-item'>
            <div className='menu-item__info'>
                <h4>{title}</h4>
                <div>{price} сум</div>
                <div>кол-во {quantity}</div>
            </div>
            <div className='menu-item__controls'>
                <Link to={`/admin/edit-product/${id}`}>Изм.</Link>
                <button>Удалить</button>
            </div>
        </li>
    );
};

export default MenuItem;
