import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FinanceItem = ({ type, price, bgColor }) => {
    return (
        <Box
            sx={{
                backgroundColor: bgColor,
                color: '#fff',
                borderRadius: '4px',
                p: 2,
                mt: 2,
                width: { sm: '100%' },
            }}>
            <Typography sx={{ mb: 2 }} variant='h4' align='center'>
                {type}
            </Typography>
            <Typography variant='subtitle1' align='center'>
                {price} сум
            </Typography>
        </Box>
    );
};

export default FinanceItem;
