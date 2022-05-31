import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Waiter from './pages/Waiter';
import Admin from './pages/Admin';

function App() {
    return (
        <div className='wrapper'>
            <Routes>
                <Route path='waiter' element={<Waiter />} />
                <Route path='admin/*' element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;
