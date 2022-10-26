import React,{useState,useEffect} from 'react'
import { TestScreenLayout } from '../../designs/Test/TestScreenLayout';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query'
import useTests from '../../hooks/useTests';
const TestScreen = () => {

    const [testsLists,setTestsList]=useState([])
    const [pageData,setPageData]=useState({})
    const {getTestList}=useTests();
    const params=useParams();
    let packageId=params.packageId;
    const { data: testList, isLoading: TestListLoader } = useQuery([`TestListData`], () => getTestList(), { enabled: true, retry: false })
    useEffect(()=>{
        if(testList){
        setTestsList(testList?.data);
        let pData=testsLists?.filter((item)=>item._id===packageId)
        if(pData){
            setPageData(pData[0]);
            console.log("pageData",pageData)
        }
    } 
    },[testList])
    
    return (
        <>
            <TestScreenLayout pageData={pageData}/>
        </>
    )
}

export default TestScreen