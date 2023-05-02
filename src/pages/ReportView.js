import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Card, Divider, List, ListItem, ListItemText, Paper, Tooltip, Typography, Zoom } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useStore } from '../stores'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStudent } from '../hooks/useStudent';
import { useNavigate, useParams } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import WarningIcon from '@mui/icons-material/Warning';
import HomeLayout from '../designs/Dashboard/HomeLayout';
import useSessionHelper from '../hooks/useSession';
import { Reports } from '../designs/Reports/Reports';

const ReportView = () => {
  const currentUser = useStore((state) => state.currentUser);
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  const { getPackage } = useStudent();
  const { StudentReport, getReportFilter} = useSessionHelper();
  let reportData = useStore((state) => state.reportData);
  const [newTestList, setNewTestList] = useState();
  const { data: packageData,isLoading } = useQuery(['Package', reportData?.packageId], () => getPackage(reportData?.packageId), { enabled: !!reportData?.packageId })
  const { data: ReportData} = useQuery([`ReportData`],()=>getReportFilter(currentUser.id),{enabled: true ,retry:false})
  const {data: StudentRep} = useQuery([ `StudentReport`],()=> StudentReport(ReportData?.packageId),{enabled: true ,retry:false})
  const questionAna = () => {
    console.log("tsetsss", reportData?.questions)
    reportData?.questions.map((item) => <div>{item}</div>)
  }
  useEffect(() => {

    if (ReportData && packageData?.data) {
      let map = {}
      reportData?.questions?.forEach((item) => map[item.questionId] = item)
      let newList = packageData?.data?.questions.map((data,i) => {
        var pData = { ...data, correctAnswer: reportData?.questions[i]?.correctIndex, submitedAnswer: reportData?.questions[i]?.answerIndex, result: reportData?.questions[i]?.answerIndex===-1?null:reportData?.questions[i]?.correctIndex === reportData?.questions[i]?.answerIndex }
        return pData
      })
      console.log("neww", newList)
      setNewTestList(newList)
      
    }
    console.log('Package Data',packageData?.data)
    
  }, [ReportData, packageData, reportData?.questions])
  
    useEffect(()=>{
      console.log('Students Report')
    },[StudentRep]);

    useEffect(() => {
      
      console.log('Filter Data',ReportData?.data?.data[0]);
      // let FilterData = ReportData?.data?.data[0];
    },[ReportData]);

  return (
        <Reports
        isLoading={isLoading}
        ReportData={ReportData?.data?.data[0]}
        newTestList={newTestList}
        questionAna={questionAna}
        />
  )
}

export default ReportView