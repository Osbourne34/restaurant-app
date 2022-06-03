import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../../components/Dashboard/Dashboard';
import Finance from '../../components/Finance/Finance';
import Monitoring from '../../components/Monitoring/Monitoring';
import Goods from '../../components/Goods/Goods';
import Users from '../../components/Users/Users';
import Form from '../../components/FormForProduct/FormForProduct';

const Admin = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />}>
                    <Route index element={<Finance />} />
                    <Route path='monitoring' element={<Monitoring />} />
                    <Route path='goods' element={<Goods />} />
                    <Route path='users' element={<Users />} />
                    <Route path='goods/create-product' element={<Form />} />
                    <Route path='goods/:id' element={<Form />} />
                </Route>
            </Routes>
        </>
    );
};

export default Admin;
