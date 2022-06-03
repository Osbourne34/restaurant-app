import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

import Title from '../Title/Title';

function FormForProduct() {
    const { products } = useSelector((state) => state.products);
    const { id } = useParams();

    const [title, setTitle] = React.useState(!id ? '' : products[id - 1].title);
    const [price, setPrice] = React.useState(!id ? '' : products[id - 1].price);
    const [category, setCategory] = React.useState(
        !id ? '' : products[id - 1].category,
    );

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <Container maxWidth='sm'>
            <Box component='form'>
                <Title
                    center={true}
                    title={!id ? 'Создание товара' : 'Редактирование продукта'}
                />

                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id='outlined-basic'
                    label='Название'
                    variant='outlined'
                    fullWidth
                    sx={{ mb: 4 }}
                />
                <TextField
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id='outlined-basic'
                    label='Цена'
                    variant='outlined'
                    fullWidth
                    sx={{ mb: 4 }}
                />

                <FormControl sx={{ mb: 4 }} fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                        Категория
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={category}
                        label='Age'
                        onChange={handleChange}>
                        <MenuItem value='Кухня'>Кухня</MenuItem>
                        <MenuItem value='Склад'>Склад</MenuItem>
                    </Select>
                </FormControl>

                <Button size='large' fullWidth variant='contained'>
                    {!id ? 'Создать' : 'Сохранить изменения'}
                </Button>
            </Box>
        </Container>
    );
}

export default FormForProduct;
