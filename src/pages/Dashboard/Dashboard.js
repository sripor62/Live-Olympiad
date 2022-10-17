import React from 'react'
import { Grid } from '@mui/material'
import HomeLayout from '../../designs/HomeLayout';
import { useState } from 'react'
import { CustomListItem } from '../../components/CustomListItem'
import { KnowledgeTree } from '../../designs/KnowledgeTreeBox'
import { UpgradeBox } from '../../designs/UpgradeBox'
import { SubjectSelector } from '../../designs/SubjectSelector'
import { FilterByStatus } from '../../components/FilterByStatus'
import { DashboardLayout } from '../../designs/DashboardLayout';

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