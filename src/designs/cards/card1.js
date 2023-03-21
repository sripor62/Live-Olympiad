import { useState } from "react";
import { Button, Typography } from "@mui/material";
import "./card.css";
import {AnimateSharedLayout} from 'framer-motion';
import {UilTimes} from "@iconscout/react-unicons";
const Card1 = (props) => {
    const [ expanded, setExpanded] = useState(false);
  return (
          <AnimateSharedLayout >
            {
          expanded? (
            <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
          ):(
            <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
          )
        }
          </AnimateSharedLayout>
  );
};
function CompactCard({param,setExpanded}){
  
 return(
  <div className="card-container"  >
  <div className="card" >
   <div className="card-body">
     <div className="left-section">
       <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:'12px',lineHeight:'16px',color:'#FFFFFF'}}>MATHS OLYMPIAD - Regional</Typography>
       <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:'9px',lineHeight:'12px',color:'#FFFFFF'}}>Cambridge School</Typography>
     </div>
     <div className="right-section">
       {/* <div className="calendar">12</div> */}
       <Typography className="date" sx={{fontFamily:'Inter', fontSize:'21px',fontWeight:'400',fontStyle:'normal',lineHeight:'25px'}}>12</Typography>
       <Typography className="month" sx={{fontFamily:'Inter', fontSize:'10px',fontWeight:'400',fontStyle:'normal',lineHeight:'12px'}}>Nov</Typography>
      
     </div>
   </div>
   <div className="card-footer">
     <div className="bottom-section">
       {/* <SvgIcon /> */}
       <img src="images/maths.png"></img>
     </div>
     <div className="bottom-right-section" style={{marginRight:'15px'}}>
         <Typography sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Result</Typography>
       <img src="images/Arrow5.png"  sx={{color:'#FFFFFF', fontSize:42}} onClick={setExpanded}/>
     </div>
   </div>
   </div>   
 </div>
  )
}

  function ExpandedCard({param, setExpanded}){

    const [option,setOption ] = useState('option1');

    function handleOptionChange(newOption){
      setOption(newOption);
    }
    const publicUrl = process.env.PUBLIC_URL;

    const data =[
      {title:"Rank",rank:"7", percent:"1",avg:"14"},
      {title:"Percentage (%)",rank:"92", percent:"97",avg:"84"},
      {title:"Percentile",rank:"40", percent:"53",avg:"24"},
    ]
    return (
        <div className='ExpandedCard'
        style={{
            background:"rgba(217, 217, 217, 0.3)",
        }}   
        >
        <div className="card-header">
        <UilTimes  className="cross" onClick={setExpanded}/>
          <div className="left">
          <Typography style={{fontFamily:'Inter', fontSize:'24px',fontStyle:'normal',fontWeight:'700',lineHeight:'29px',color:'#FFFFFF'}}>MATHS OLYMPIAD - Regional</Typography>
          <Typography style={{fontFamily:'Inter', fontSize:'14px',fontStyle:'normal',fontWeight:'400',lineHeight:'17px',color:'#FFFFFF'}}>Cambridge School</Typography>
          <img src=" images/maths.png"/>
          </div>
            <div className="middle">
              <div className="calendar">
              <Typography  sx={{fontFamily:'Inter', fontSize:'21px',fontWeight:'400',fontStyle:'normal',lineHeight:'25px',color:'#000000'}}>12</Typography>
              <Typography  sx={{fontFamily:'Inter', fontSize:'12px',fontWeight:'400',fontStyle:'normal',lineHeight:'12px',color:'#000000'}}>Nov</Typography>
              </div>
            </div>
            <div className="right">
              <div className="right-sect">

                <Typography style={{fontFamily:'Inter', fontSize:'10px',fontStyle:'normal',fontWeight:'500',lineHeight:'12px',color:'#FFFFFF'}}>QUALIFYING STATUS</Typography>
                 <img src="images/badge.png"/>
                 <Typography style={{fontFamily:'Inter', fontSize:'14px',fontStyle:'normal',fontWeight:'700',lineHeight:'17px',color:'#FFFFFF'}}>Qualified for Nationals</Typography> 
                
                </div>
          </div>
        </div>
       
        <div className="options">
                <button className="opt-btn1" onClick={()=> handleOptionChange('option1')}>
                  <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'18px', fontStyle:'normal',fontWeight:'500',lineHeight:'22px'}}>Result</Typography></button>
                <button className="opt-btn2" onClick={()=> handleOptionChange('option2')}>
                  <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'18px', fontStyle:'normal',fontWeight:'500',lineHeight:'22px'}}>Awards & Certificates</Typography></button>
                <Button variant="outlined" className="eye-btn"  startIcon={<img src="images/eye.png"/>}>
                  <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'600',lineHeight:'17px'}}>
                    VIEW TEST</Typography>
                    </Button>
              </div>
              {option === 'option1' &&(
                <div className="Result-content">
                  <div className="left-result">
                    <button  className="text-result">
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'18px', fontStyle:'normal',fontWeight:'700',lineHeight:'22px'}}>
                    Score Summary</Typography>
                   <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'24px', fontStyle:'normal',fontWeight:'500',lineHeight:'29px'}}>
                    28/30 </Typography>
                    </button>
                  
                  <Button className="result-btn">
                  <Typography className="text-btn" style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                  Total Questions</Typography>
                  <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                    30</Typography>
                    </Button>
                    <Button className="result-btn1">
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                    Attempted Questions</Typography>
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                      30</Typography>
                    </Button>
                    <Button className="result-btn2">
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                    Unatempted Questions</Typography>
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                      0</Typography>
                    </Button>
                    <Button className="result-btn3">
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                    score Percentage</Typography>
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                      93.33%</Typography>
                    </Button>
                  {/* <button><Typography>Total Questions</Typography></button>
                  <button><Typography>Attempted Questions</Typography></button>
                  <button><Typography>Unatempted Questions</Typography></button>
                  <button><Typography>score Percentage</Typography></button> */}
                  </div>
                  <div className="right-result">
                      <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'18px', fontStyle:'normal',fontWeight:'700',lineHeight:'22px'}}>
                        Comparative Scores</Typography>
                      <table className="table">
                        <tbody>
                        <tr>
                          <th></th>
                          <th><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                            You</Typography></th>
                          <th><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                            Top Performer</Typography></th>
                          <th><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                            Avg Performer</Typography></th>
                        </tr>
                        <tr>
                          <td>
                            <Typography></Typography>
                          </td>
                        </tr>
                          {data.map((val,key)=>{
                            return(
                              <tr key={key}>
                                <td className="title-tabl">{val.title}</td>
                                <td className="row1">{val.rank}</td>
                                <td className="row2">{val.percent}</td>
                                <td className="row2">{val.avg}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                  </div>
                  </div>
              )}{option === 'option2' &&(
                  <div className="Award-content">
                    <div>
                    <img src={`${publicUrl}/images/goldmedal.png`} alt ="G-Medal"/>
                  </div>
                  <div style={{alignItems:'center'}}>
                      <p style={{fontSize:'20px',fontWeight:'700'}}>Congratulations !!!</p>
                      <p>You have been awarded with a Gold Medal and</p>
                      <p>a Samsung Smart Tab for scoring Rank 1 </p>
                      <p>in the Regional Maths Olympiad</p>
                      <p>The medal and Samsung Smart Tab shall be awarded</p>
                      <p>to you during the Award Ceremony scheduled on __/__/____</p>
                      <img src="images/certificate.png"/><p>Download Certificate</p>

                      </div>
                  </div>
              )}
        </div>
    );
}
export default Card1;
