import React,{useEffect} from 'react'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { useState } from 'react'
import {useQuery} from 'react-query'
import { DashboardLayout } from '../../designs/Dashboard/DashboardLayout';
import { navigateAsPerSessionValidity } from "../../services/helpers";
import useTests from '../../hooks/useTests';
import TestScreen from '../Test/TestScreen'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    
    useEffect(() => {
        navigateAsPerSessionValidity(true);
      });
      const navigate=useNavigate();
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [testsLists,setTestsList]=useState([])
    
    const [flagShow,setFlagShow]=useState(false)
    const {getTestList}=useTests();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { data: testList, isLoading: TestListLoader } = useQuery([`TestListData`], () => getTestList(), { enabled: true, retry: false })
    useEffect(()=>{
        setTestsList(testList?.data);
        
    },[testList])
    const testScreen=(item)=>{
        
    window.location.href="/TestScreen"
    }
    return <HomeLayout>
       <DashboardLayout
            open={open}
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            testsLists={testsLists}
            setTestsList={setTestsList}
            testScreen={testScreen}
        />
    </HomeLayout>

}

export default Dashboard