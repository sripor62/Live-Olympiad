import React,{useEffect} from 'react'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { useState } from 'react'
import {useQuery} from 'react-query'
import { DashboardLayout } from '../../designs/Dashboard/DashboardLayout';
import { navigateAsPerSessionValidity } from "../../services/helpers";
import useTests from '../../hooks/useTests';
const Dashboard = () => {
    
    useEffect(() => {
        navigateAsPerSessionValidity(true);
      });
    const [drawerFlag, setDrawerFlag] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [testsLists,setTestsList]=useState([])
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
    return <HomeLayout>
        <DashboardLayout
            open={open}
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            testsLists={testsLists}
            setTestsList={setTestsList}
        />
    </HomeLayout>
}

export default Dashboard