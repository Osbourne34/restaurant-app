import React from 'react';
import { useNavigate } from 'react-router-dom';

import './finance.scss';

const Finance = () => {
    const navigate = useNavigate();

    return (
        <div className='finance'>
            <div className='finance__head'>
                <button
                    className='finance__back-btn'
                    onClick={() => navigate(-1)}>
                    Назад
                </button>
                <h2>Доходы</h2>
            </div>

            <div className='finance__tabs'>
                <div className='finance__tabs-item'>За день</div>
                <div className='finance__tabs-item'>За месяц</div>
                <div className='finance__tabs-item'>Годовой</div>
            </div>

            <div className="finance__box">
                <h3>Доходы</h3>
                <div>1 374 000</div>
            </div>
            <div className="finance__box">
                <h3>Расходы</h3>
                <div>-560 000</div>
            </div>
            <div className="finance__box">
                <h3>Прибыль</h3>
                <div>814 000</div>
            </div>
        </div>
    );
};

export default Finance;
