import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Waiter from './pages/Waiter';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
    return (
        <div className='wrapper'>
            <Routes>
                <Route path='waiter' element={<Waiter/>}/>
                <Route path='admin/*' element={<Admin/>}/>

                <Route path='admin/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
