import React from 'react'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { useState } from 'react'
import { DashboardLayout } from '../../designs/Dashboard/DashboardLayout';

const Dashboard = () => {
    const [drawerFlag, setDrawerFlag] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <HomeLayout>
        <DashboardLayout
            open={open}
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
        />
    </HomeLayout>
}

export default Dashboard