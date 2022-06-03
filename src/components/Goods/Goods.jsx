import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import Title from '../../components/Title/Title';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import GoodItem from '../GoodItem/GoodItem';

function Goods() {
    const { products } = useSelector((state) => state.products);

    const productsRender = products.map((product) => {
        return <GoodItem key={product.id} {...product} />;
    });

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                }}>
                <Title title='Товары' />
                <Button
                    component={RouterLink}
                    to='create-product'
                    size='small'
                    variant='outlined'>
                    Создать товар
                </Button>
            </Box>

            {productsRender}
        </>
    );
}

export default Goods;
