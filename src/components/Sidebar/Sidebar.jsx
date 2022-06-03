import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupIcon from '@mui/icons-material/Group';

const drawerWidth = 270;

function Sidebar({ container, mobileOpen, setMobileOpen, handleDrawerToggle }) {
    const drawer = (
        <List component='nav'>
            <ListItemButton
                onClick={() => setMobileOpen(false)}
                component={RouterLink}
                to=''
                end
                sx={{
                    '&.active': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    },
                }}>
                <ListItemIcon
                    sx={{
                        '& ': {
                            minWidth: '40px',
                        },
                    }}>
                    <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText primary='Доходы' />
            </ListItemButton>
            <ListItemButton
                onClick={() => setMobileOpen(false)}
                component={RouterLink}
                to='monitoring'
                sx={{
                    '&.active': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    },
                }}>
                <ListItemIcon
                    sx={{
                        '& ': {
                            minWidth: '40px',
                        },
                    }}>
                    <MonitorHeartIcon />
                </ListItemIcon>
                <ListItemText primary='Мониторинг' />
            </ListItemButton>
            <ListItemButton
                onClick={() => setMobileOpen(false)}
                component={RouterLink}
                to='goods'
                sx={{
                    '&.active': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    },
                }}>
                <ListItemIcon
                    sx={{
                        '& ': {
                            minWidth: '40px',
                        },
                    }}>
                    <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText primary='Товары' />
            </ListItemButton>
            <ListItemButton
                onClick={() => setMobileOpen(false)}
                component={RouterLink}
                to='users'
                sx={{
                    '&.active': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    },
                }}>
                <ListItemIcon
                    sx={{
                        '& ': {
                            minWidth: '40px',
                        },
                    }}>
                    <GroupIcon />
                </ListItemIcon>
                <ListItemText primary='Пользователи' />
            </ListItemButton>
        </List>
    );

    return (
        <Box
            component='nav'
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
            <Drawer
                container={container}
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}>
                {drawer}
            </Drawer>
            <Drawer
                variant='permanent'
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        top: '64px',
                    },
                }}
                open>
                {drawer}
            </Drawer>
        </Box>
    );
}

export default Sidebar;
