import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const Form = ({submit}) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        submit(name, password);
    };

    return (
        <Container maxWidth='sm'
                   sx={{
                       height: '100vh',
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center',
                       flexDirection: 'column'
                   }}>
            <Typography sx={{textAlign: 'center'}} mb={4} variant='h4'>
                Войти как админ
            </Typography>
            <Box onSubmit={handleSubmit} component='form'>
                <TextField onChange={(e) => setName(e.target.value)} value={name} sx={{mb: 4}}
                           fullWidth
                           label="Name" variant='outlined'/>
                <TextField onChange={(e) => setPassword(e.target.value)} value={password}
                           sx={{mb: 4}} fullWidth
                           label='Password' variant='outlined'
                           type='password'/>
                <Button size='large' fullWidth variant='contained'
                        type='submit'>Войти</Button>
            </Box>
        </Container>
    );
};

export default Form;