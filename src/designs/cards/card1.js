import { useState } from "react";
import { Avatar, CardHeader, IconButton, Typography } from "@mui/material";
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
    
    return (
        <div className='ExpandedCard'
        style={{
            background:"rgba(217, 217, 217, 0.3)",
        }}   
        >
        <div className="card-header">
        <UilTimes  className="cross" onClick={setExpanded}/>
          <Typography style={{fontFamily:'Inter', fontSize:'24px',fontStyle:'normal',fontWeight:'700',lineHeight:'29px',color:'#FFFFFF'}}>MATHS OLYMPIAD - Regional</Typography>
          <Typography style={{fontFamily:'Inter', fontSize:'14px',fontStyle:'normal',fontWeight:'400',lineHeight:'17px',color:'#FFFFFF'}}>Cambridge School</Typography>
          <img src=" images/maths.png"/>
          <Typography style={{fontFamily:'Inter', fontSize:'24px',fontStyle:'normal',fontWeight:'700',lineHeight:'29px',color:'#FFFFFF'}}>MATHS OLYMPIAD - Regional</Typography>
          <img src="images/badge.png"/>
          <Typography style={{fontFamily:'Inter', fontSize:'14px',fontStyle:'normal',fontWeight:'400',lineHeight:'17px',color:'#FFFFFF'}}>Cambridge School</Typography> 
         
        </div>
        <div className="options">
                <button className="opt-btn1" onClick={()=> handleOptionChange('option1')}>Result</button>
                <button className="opt-btn2" onClick={()=> handleOptionChange('option2')}>Awards & Certificates</button>
              </div>
              {option === 'option1' &&(
                <div className="Result-content">
                  <div>
                   
                  </div>
                  <p>Result 1</p>
                  <p>Result 2</p>
                  <p>Result 3</p>
                  </div>
              )}{option === 'option2' &&(
                  <div className="Award-content">
                    <div>
                    <img src="images/Gold.svg"/>
                  </div>
                      <p>Content 1</p>
                      <p>Content 2</p>
                      <p>Content 3</p>
                  </div>
              )}
        </div>
    );
}
export default Card1;
