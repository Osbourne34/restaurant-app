import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAuth = createAsyncThunk(
    'auth/fetchAdminLogin',
    async (values, {dispatch}) => {
        const response = await fetch('http://bgcafe.herokuapp.com/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(values)
        });

        const data = await response.json();
        console.log(data);
        // dispatch(setAuth(data));
    }
);

const initialState = {
    user: null,
    token: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {

        }
    }
});

export const {setAuth} = authSlice.actions;

export default authSlice.reducer;