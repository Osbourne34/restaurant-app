import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import FinanceItem from '../FinanceItem/FinanceItem';
import Title from '../Title/Title';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Box
            sx={{
                display: { sm: 'flex' },
                justifyContent: { sm: 'space-between' },
                gap: { sm: 2 },
            }}
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && children}
        </Box>
    );
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Finance = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Title title='Доходы' />
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs variant='fullWidth' value={value} onChange={handleChange}>
                    <Tab label='За день' {...a11yProps(0)} />
                    <Tab label='За месяц' {...a11yProps(1)} />
                    <Tab label='За год' {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <FinanceItem
                    type='Доходы'
                    price='1 374 000'
                    bgColor='#42a5f5'
                />
                <FinanceItem
                    type='Расходы'
                    price='-560 000'
                    bgColor='#ef5350'
                />
                <FinanceItem type='Прибыль' price='814 000' bgColor='#4caf50' />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FinanceItem
                    type='Доходы'
                    price='3 374 000'
                    bgColor='#42a5f5'
                />
                <FinanceItem
                    type='Расходы'
                    price='-360 000'
                    bgColor='#ef5350'
                />
                <FinanceItem
                    type='Прибыль'
                    price='3 014 000'
                    bgColor='#4caf50'
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FinanceItem
                    type='Доходы'
                    price='8 374 000'
                    bgColor='#42a5f5'
                />
                <FinanceItem
                    type='Расходы'
                    price='-1 060 000'
                    bgColor='#ef5350'
                />
                <FinanceItem
                    type='Прибыль'
                    price='7 314 0000'
                    bgColor='#4caf50'
                />
            </TabPanel>
        </Box>
    );
};

export default Finance;
