import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    IconButton,
    Menu,
    MenuItem,
    Box,
    Typography,
    Chip,
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function GoodItem({ title, price, category, id }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: { xs: 2 },
                    borderRadius: 2,
                    boxShadow: 3,
                    mt: 2,
                }}>
                <Box
                    sx={{
                        flexGrow: { sm: 1 },
                        display: { sm: 'flex' },
                        justifyContent: {
                            sm: 'space-between',
                            lg: 'flex-start',
                        },
                        alignItems: { sm: 'center' },
                        mr: { sm: 2, lg: 0 },
                    }}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            width: { sm: '45%', lg: '350px' },
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            textTransform: 'capitalize',
                        }}
                        variant='body1'>
                        {title}
                    </Typography>
                    <Typography
                        sx={{ mt: 0.5, mb: 0.5, width: { lg: '300px' } }}
                        variant='body1'>
                        {new Intl.NumberFormat('ru-RU').format(price)} сум.
                    </Typography>
                    <Chip label={category} size='small' />
                </Box>

                <IconButton
                    sx={{ display: { sm: 'none' } }}
                    onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem
                        component={RouterLink}
                        to={`${id}`}
                        onClick={handleClose}>
                        Изменить
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            handleOpenDialog();
                        }}>
                        Удалить
                    </MenuItem>
                </Menu>

                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <IconButton
                        component={RouterLink}
                        to={`${id}`}
                        color='primary'
                        size='large'>
                        <BorderColorIcon />
                    </IconButton>
                    <IconButton
                        onClick={handleOpenDialog}
                        color='error'
                        size='large'>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle id='alert-dialog-title'>
                    Вы действительно хотите удалить продукт?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Отмена</Button>
                    <Button color='error' onClick={handleCloseDialog}>
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default GoodItem;
