import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useStore } from '../stores'
import { useStudent } from '../hooks/useStudent';
import { useNavigate, useParams } from 'react-router-dom';
import useSessionHelper from '../hooks/useSession';
import { ReportsLayout } from '../designs/Reports/ReportsLayout';

const ReportView = () => {
  const currentUser = useStore((state) => state.currentUser);
  const params = useParams();
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
        <ReportsLayout
        isLoading={isLoading}
        ReportData={ReportData?.data?.data[0]}
        newTestList={newTestList}
        questionAna={questionAna}
        />
  )
}

export default ReportView