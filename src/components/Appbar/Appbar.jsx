import React from 'react';

import { AppBar, IconButton, Toolbar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Appbar({ handleDrawerToggle }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='fixed'>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: 'space-between',
                        md: 'flex-end',
                    },
                }}>
                <IconButton
                    color='inherit'
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' } }}>
                    <MenuIcon />
                </IconButton>
                <IconButton onClick={handleMenu} color='inherit' size='large'>
                    <AccountCircle fontSize='inherit' />
                </IconButton>
                <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;
