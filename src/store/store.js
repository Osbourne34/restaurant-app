import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import categoriesReduces from './categoriesSlice';
import orderReducer from './orderSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReduces,
        order: orderReducer
    },
})