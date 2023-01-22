import React from 'react';
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { ScheduleLayout } from '../../designs/Dashboard/ScheduleLayout';
import { useStore } from "../../stores";
const Schedule = () => {
    const clearCurrentUser = useStore((state) => state.clearCurrentUser)
    return (
        <HomeLayout logOutHandler={clearCurrentUser}>
            <ScheduleLayout/>
        </HomeLayout>
    );
};

export default Schedule;