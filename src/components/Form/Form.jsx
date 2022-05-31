import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import './form.scss';

const Form = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { products } = useSelector((state) => state.products);
    const { categories } = useSelector((state) => state.categories);

    return (
        <form className='form' onSubmit={(e) => e.preventDefault()}>
            <div className='form__head'>
                <button onClick={() => navigate(-1)} className='form__back-btn'>
                    Назад
                </button>
                <h2>{id ? 'Редактирование' : 'Создание продукта'}</h2>
            </div>
            <input
                className='form__input'
                type='text'
                value={id ? products[id - 1].title : ''}
                placeholder='Название'
            />
            <input
                className='form__input'
                type='text'
                value={id ? products[id - 1].price : ''}
                placeholder='Цена'
            />
            <select className='form__select'>
                {categories.map(({ category, title }) => {
                    return (
                        <option
                            selected={id && products[id].category === category}
                            key={category}
                            value={category}>
                            {title}
                        </option>
                    );
                })}
            </select>
            <input
                className='form__input'
                type='number'
                value={id ? products[id - 1].quantity : ''}
                placeholder='Количество'
            />
            <button className='form__submit-btn'>{id ? 'Сохранить' : 'Создать'}</button>
        </form>
    );
};

export default Form;
