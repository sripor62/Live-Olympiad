import React from 'react';
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { ScheduleLayout } from '../../designs/Dashboard/ScheduleLayout';
import { useStore } from "../../stores";
const Schedule = () => {
    let curentUser = JSON.parse(localStorage.current_user);
    let stuName=curentUser?.state?.currentUser.fullName.split(' ')[0]
    const clearCurrentUser = useStore((state) => state.clearCurrentUser)
    return (
        <HomeLayout logOutHandler={clearCurrentUser} stuName={stuName}>
            <ScheduleLayout/>
        </HomeLayout>
    );
};

export default Schedule;