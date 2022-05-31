import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import './menu.scss';

import MenuItem from '../MenuItem/';

const Menu = () => {
    const { products } = useSelector((state) => state.products);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const route = pathname.slice(7);

    const filteredProducts = products.filter(
        (product) => product.category === route,
    );

    return (
        <div className='menu'>
            <div className='menu__head'>
                <button onClick={() => navigate(-1)} className='menu__back-btn'>
                    Назад
                </button>
                <h2>{route === 'kitchen' ? 'Кухня' : 'Склад'}</h2>
            </div>

            <div className='menu__controls'>
                <input type='text' placeholder='Поиск' />
                <button>Обновить</button>
            </div>

            <ul className='menu__list'>
                {filteredProducts.map((product) => {
                    return <MenuItem key={product.id} {...product} />;
                })}
            </ul>
        </div>
    );
};

export default Menu;
