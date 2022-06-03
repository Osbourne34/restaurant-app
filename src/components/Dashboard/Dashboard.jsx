import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Box, CssBaseline, Toolbar } from '@mui/material';

import Appbar from '../Appbar/Appbar';
import Sidebar from '../Sidebar/Sidebar';

const drawerWidth = 270;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Appbar handleDrawerToggle={handleDrawerToggle} />
            <Sidebar
                container={container}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                setMobileOpen={setMobileOpen}
            />
            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: { md: 4, sm: 3, xs: 2 },
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;
