import React from 'react';

import Typography from '@mui/material/Typography';

const Title = ({ title, center }) => {
    return (
        <Typography align={center ? 'center' : 'left'} sx={{ mb: 2 }} variant='h5'>
            {title}
        </Typography>
    );
};

export default Title;
