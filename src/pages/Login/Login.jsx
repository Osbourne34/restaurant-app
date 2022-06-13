import React from 'react';

import { useDispatch } from 'react-redux';
import { fetchAuth } from '../../store/authSlice';

import Form from './../../components/Form';

const Login = () => {
    const dispatch = useDispatch();

    const submit = (name, password) => {
        dispatch(fetchAuth({name, password}));
    };

    return (
        <Form submit={submit}/>
    );
};

export default Login;