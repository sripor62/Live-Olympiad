import { Typography } from "@mui/material";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import {UilTimes} from "@iconscout/react-unicons"
const Card3 = () => {
  const [ expanded, setExpanded] = useState(false);
  return (
      <AnimateSharedLayout>
        {
          expanded?(
            <ExpandedCard setExpanded={()=>setExpanded(false)}/>
          ):(
            <CompactCard setExpanded={()=>setExpanded(true)}/>
          )
        }
      </AnimateSharedLayout>
    
  );
};
function CompactCard({setExpanded}){
  return(
    <div className="card-container">
    <div className="card"  style={{backgroundColor:'#E54545'}}>
     <div className="card-body" style={{backgroundColor:'#E54545'}}>
       <div className="left-section" style={{backgroundColor:'#E54545'}}>
         <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:'12px',lineHeight:'15px',color:'#FFFFFF'}}>SCIENCE OLYMPIAD- Regional</Typography>
         <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:'9px',lineHeight:'11px',color:'#FFFFFF'}}>Cambridge School</Typography>
       </div>
       <div className="right-section1" style={{backgroundColor:'#E54545'}}>
         {/* <div className="calendar">12</div> */}
         <img src="../images/TBSch.svg"/>
       </div>
     </div>
     <div className="card-footer" style={{backgroundColor:'#E54545'}}>
       <div className="bottom-section" style={{backgroundColor:'#E54545'}}>
         {/* <SvgIcon /> */}
         <img src="images/Honey.svg"></img>
       </div>
       <div className="bottom-right-section" style={{backgroundColor:'#E54545',marginRight:'15px'}}>
           <Typography sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Enroll</Typography>
         <img src="../images/Arrow6.svg"  sx={{color:'#FFFFFF', fontSize:42}} onClick={setExpanded}/>
       </div>
     </div>
   </div>   
   </div> 
  )
}
function ExpandedCard({setExpanded}){
  return(
    <div>
       <div>
          <UilTimes onClick={setExpanded}/>
       </div>
      <span>Expanded card</span>
    </div>
  )
}
export default Card3;
