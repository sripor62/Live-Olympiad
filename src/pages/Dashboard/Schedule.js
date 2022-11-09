import React from 'react';
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { ScheduleLayout } from '../../designs/Dashboard/ScheduleLayout';
import { useStore } from "../../stores";
const Schedule = () => {
   
    const curentUser = useStore((state)=>state.currentUser)
    const clearCurrentUser = useStore((state) => state.clearCurrentUser)
    let stuName=curentUser?.fullName;
  const  [fName,LName]=stuName.split(" ")
    console.log()
    return (
        <HomeLayout logOutHandler={clearCurrentUser} stuName={fName}>
            <ScheduleLayout/>
        </HomeLayout>
    );
};

export default Schedule;