import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: null,
    totalPrice: 0,
    products: [],
};

const setTotalPrice = (products) => {
    if (products.length) {
        return products
            .map((item) => item.amount * item.price)
            .reduce((start, curr) => start + curr);
    } else {
        return 0;
    }
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProductToOrder(state, action) {
            const product = action.payload;
            const isThisProductInOrder = state.products.some(
                (item) => item.id === product.id,
            );

            if (isThisProductInOrder) {
                const currentProduct = state.products.find(
                    (item) => item.id === product.id,
                );
                currentProduct.amount += 1;
            } else {
                state.products.push({
                    ...product,
                    amount: 1,
                });
            }

            state.totalPrice = setTotalPrice(state.products);
        },
        removeProductFromOrder(state, action) {
            state.products = state.products.filter(
                (product) => product.id !== action.payload,
            );

            state.totalPrice = setTotalPrice(state.products);
        },
        decreaseProduct(state, action) {
            state.products = state.products.map((product) => {
                if (product.id === action.payload) {
                    product.amount += 1;
                }
                return product;
            });

            state.totalPrice = setTotalPrice(state.products);
        },
        increaseProduct(state, action) {
            state.products = state.products
                .map((product) => {
                    if (product.id === action.payload) {
                        product.amount -= 1;
                    }
                    return product;
                })
                .filter((product) => product.amount !== 0);

            state.totalPrice = setTotalPrice(state.products);
        },
        clearOrder(state, action) {
            if (state.products.length > 0) {
                state.products = state.products = [];
                state.totalPrice = setTotalPrice(state.products);
            }
        },
        typeSelect(state, action) {
            state.type = action.payload;
        }
    },
});

export const {
    addProductToOrder,
    removeProductFromOrder,
    increaseProduct,
    decreaseProduct,
    clearOrder,
    typeSelect
} = orderSlice.actions;

export default orderSlice.reducer;
