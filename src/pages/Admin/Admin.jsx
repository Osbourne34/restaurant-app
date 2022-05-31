import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './admin.scss';

import Finance from '../../components/Finance';
import Form from '../../components/Form';
import Menu from '../../components/Menu';

const Admin = () => {
    return (
        <div className='admin'>
            <div className='container'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <nav className='admin__nav'>
                                <Link
                                    className='admin__link'
                                    to='/admin/finance'>
                                    Доходы
                                </Link>
                                <Link
                                    className='admin__link'
                                    to='/admin/kitchen'>
                                    Кухня
                                </Link>
                                <Link className='admin__link' to='/admin/stock'>
                                    Склад
                                </Link>
                                <Link
                                    className='admin__link'
                                    to='/admin/create-product'>
                                    Создание товара
                                </Link>
                            </nav>
                        }
                    />
                    <Route path='finance' element={<Finance />} />
                    <Route path='create-product' element={<Form />} />
                    <Route path='kitchen' element={<Menu />} />
                    <Route path='stock' element={<Menu />} />
                    <Route path='edit-product/:id' element={<Form />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
