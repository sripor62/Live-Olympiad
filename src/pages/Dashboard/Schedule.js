import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import HomeLayout from '../auth/HomeLayout';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ScheduleLayout } from '../../designs/ScheduleLayout';

const Schedule = () => {
    return (
        <HomeLayout>
            <ScheduleLayout/>
        </HomeLayout>
    );
};

export default Schedule;