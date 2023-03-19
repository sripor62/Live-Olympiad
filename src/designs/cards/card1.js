import { useState } from "react";
import { Typography } from "@mui/material";
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
    return (
        <div className='ExpandedCard'
        style={{
            background:"#4545A5",
            boxShadow:"#4545A5",
        }}   
        >
            <div>
                <UilTimes onClick={setExpanded}/>
            </div>
            
        </div>
    )
}
export default Card1;
