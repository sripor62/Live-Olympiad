import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import WarningIcon from '@mui/icons-material/Warning';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Card, Divider, List, ListItem, ListItemText, Paper, Tooltip, Typography, Zoom } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react'
import HomeLayout from '../Dashboard/HomeLayout';

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

export const ReportsLayout = (props) => {
  return (
    <HomeLayout loader={props.isLoading}>
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
              Student Name: {props.ReportData?.data?.data[0].userName}
            </Box>
            <Box>
              Class: {props.ReportData?.data?.data[0].grade[0]}
            </Box>
            <Box>
              Score: {props.ReportData?.data?.data[0].score}
            </Box>
            <Box>
              Total Time: {props.ReportData?.totalDurationMin}
            </Box>
          </Box>
           
        </Box>
        <Box onClick={props.questionAna} sx={{width:"100%",display:'flex',alignItems:'center',flexDirection:'column'}}>
          <h4>Question wise Analysis : </h4><br /><br />
          {props.newTestList?.map((item, index) => (<Accordion style={{ width: "1000px" }}>
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