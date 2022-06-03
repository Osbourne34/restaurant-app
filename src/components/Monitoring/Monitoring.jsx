import React from 'react';
import { useSelector } from 'react-redux';

import {
    Box,
    Button,
    ToggleButtonGroup,
    ButtonGroup,
    ToggleButton,
    Typography,
    Chip,
    Dialog,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
} from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import Title from '../Title/Title';

function Monitoring() {
    const { products } = useSelector((state) => state.products);
    const [alignment, setAlignment] = React.useState('Кухня');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const filteredProducts = products.filter(
        (product) => product.category === alignment,
    );

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                }}>
                <Title title='Мониторинг' />
                <Button
                    size='small'
                    variant='outlined'
                    startIcon={<AutorenewIcon />}>
                    Обновить
                </Button>
            </Box>

            <ToggleButtonGroup
                sx={{ width: { xs: '100%', sm: '50%', lg: '40%' }, mb: 2 }}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label='text alignment'
                size='small'>
                <ToggleButton sx={{ flexGrow: { xs: 1 } }} value='Кухня'>
                    Кухня
                </ToggleButton>
                <ToggleButton sx={{ flexGrow: { xs: 1 } }} value='Склад'>
                    Склад
                </ToggleButton>
            </ToggleButtonGroup>

            {filteredProducts.map((item) => {
                return (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 2,
                            borderRadius: 2,
                            boxShadow: 3,
                            mt: 2,
                        }}
                        key={item.id}>
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    textTransform: 'capitalize',
                                    mb: 0.5,
                                }}
                                variant='body1'>
                                {item.title}
                            </Typography>
                            <Chip label={item.category} size='small' />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='body1' sx={{ mr: 2 }}>
                                {item.quantity}
                            </Typography>
                            <ButtonGroup variant='contained'>
                                <Button
                                    size='medium'
                                    color='error'
                                    onClick={handleClickOpen}>
                                    -
                                </Button>
                                <Button
                                    size='medium'
                                    color='success'
                                    onClick={handleClickOpen}>
                                    +
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Box>
                );
            })}

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText sx={{ mb: 2 }}>
                        Введите количество
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Количество'
                        type='number'
                        fullWidth
                        variant='outlined'
                        size='medium'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleClose}>Применить</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Monitoring;
