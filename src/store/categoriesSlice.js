import {createSlice} from '@reduxjs/toolkit';
import {categories} from './../assets/database';

const initialState = {
    categories,
    currentCategory: categories[0].category
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        toggleCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
})

export const {toggleCurrentCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;