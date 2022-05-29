import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: 'В зал',
    totalPrice: 50000,
    products: [
        {
            id: 1,
            title: 'pizza',
            category: 'kitchen',
            price: 40000,
            amount: 3,
        },
        {
            id: 8,
            title: 'coca-cola',
            category: 'storehouse',
            price: 12000,
            amount: 1,
        },
    ],
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
