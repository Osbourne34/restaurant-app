import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {toggleCurrentCategory} from './../../store/categoriesSlice';

import './category.scss';

const Category = () => {
    const dispatch = useDispatch();
    const {categories, currentCategory} = useSelector(state => state.categories);

    const handleOnChange = (category) => {
        dispatch(toggleCurrentCategory(category));
    }

    return (
        <ul className="category">
            {categories.map(({category, title, id}) => {
                return <li key={id} className="category__item">
                    <label
                        htmlFor={category}
                        className={`category__label ${currentCategory === category ? 'active' : ''}`}
                    >
                        {title}
                    </label>
                    <input
                        name="category"
                        value={category}
                        id={category}
                        type="radio"

                        onChange={() => handleOnChange(category)}
                        className="category__input"
                    />
                </li>
            })}
        </ul>
    )
}

export default Category;