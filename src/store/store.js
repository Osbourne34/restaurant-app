import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import categoriesReduces from './categoriesSlice';
import orderReducer from './orderSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReduces,
        order: orderReducer,
        auth: authReducer,
    },
});
