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
const colors = {
  "warning":"#fdd835",
  "correct":"#43a047",
  "wrong":"#e53935",
}
const colorsLight = {
  "warning":"",
  "correct":"#a5d6a7",
  "wrong":"#ef9a9a",
}
const Report = () => {
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
    
    <HomeLayout loader={isLoading}>
        <Paper sx={{m:"50px",width:"100%",display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <Box
          sx={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            mb:"20px"
          }}
        >
        
          <Box  className="result" >
            <Box>
              Student Name: {ReportData?.data?.data[0].userName}
            </Box>
            <Box>
              Class: {ReportData?.data?.data[0].grade[0]}
            </Box>
            <Box>
              Score: {ReportData?.data?.data[0].score}
            </Box>
            <Box>
              Total Time: {ReportData?.totalDurationMin}
            </Box>
          </Box>
           
        </Box>
        <Box onClick={questionAna} sx={{width:"100%",display:'flex',alignItems:'center',flexDirection:'column'}}>
          <h4>Question wise Analysis : </h4><br /><br />
          {newTestList?.map((item, index) => (<Accordion style={{ width: "1000px" }}>
            <AccordionSummary style={{ width: "1000px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box 
              sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',paddingX:"10px"}}
              >
                  <Typography sx={{ mb: ".5rem" }}>
                    Question {index + 1} :
                  </Typography>
                <Tooltip title={item?.result==null?"Not Attempted":item?.result===true?"Correct":"Wrong"} TransitionComponent={Zoom}>
                  <Avatar sx={{bgcolor:item?.result==null?colors['warning']:item?.result===true?colorsLight['correct']:colorsLight['wrong'],scale:"70%"}}>
                    {item?.result==null?<WarningIcon/>:item?.result===true?<CheckIcon/>:<ClearIcon/>}
                  </Avatar>
                </Tooltip>

              </Box>
              
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Card sx={{ mb: "1.5rem", border:"2px solid grey",borderColor:"grey" }}>
                  <Box sx={{p:"10px"}}>
                    <p dangerouslySetInnerHTML={{ __html: item.question }}></p>
                  </Box>
                  <Divider orientation='horizontal'/>
                  <List>
                    {item.options &&
                      item.options.map((option, i) => (
                        <ListItem>
                          <Button
                            key={option}
                            // disabled={alreadySubmittedCurQues}
                            variant="filled"
                            sx={(theme) => ({
                              width: "100%",
                              textAlign: "left",
                              border: "3px solid grey",
                              borderColor:
                                i === item.correctAnswer
                                  ? colors['correct']
                                  : i === item.submitedAnswer
                                    ? colors['wrong']
                                    : "inherit",
                              bgcolor:
                              i === item.correctAnswer
                                ? colorsLight['correct']
                                : i === item.submitedAnswer
                                  ? colorsLight['wrong']
                                  : "inherit"
                            })}
                          // onClick={() => handleCheck(option)}
                          >
                            <ListItemText
                              primary={
                                <div style={{ display: "flex" }}>
                                  <Box sx={{ mr: "20px" }}>
                                    {String.fromCharCode(97 + i) + ".   "}
                                  </Box>
                                  <p dangerouslySetInnerHTML={{ __html: option }} />
                                </div>
                              }
                            />
                          </Button>
                        </ListItem>
                      ))}
                  </List>
                  {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
                </Card>
              </Typography>
            </AccordionDetails>
          </Accordion>))}
        </Box>
        </Paper>
    </HomeLayout>

  )
}

export default Report