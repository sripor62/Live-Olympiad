import { Typography } from "@mui/material";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { UilTimes } from "@iconscout/react-unicons";
const Card2 = () => {
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
    <div className="card"  style={{backgroundColor:'#42BBEF'}}>
     <div className="card-body" style={{backgroundColor:'#42BBEF'}}>
       <div className="left-section" style={{backgroundColor:'#42BBEF'}}>
         <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:'12px',lineHeight:'16px',color:'#FFFFFF'}}>SCIENCE OLYMPIAD - Regional</Typography>
         <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:'9px',lineHeight:'12px',color:'#FFFFFF'}}>Cambridge School</Typography>
       </div>
       <div className="right-section" >
         {/* <div className="calendar">12</div> */}
         <Typography className="date" sx={{fontFamily:'Inter', fontSize:'21px',fontWeight:'400',fontStyle:'normal',lineHeight:'25px'}}>18</Typography>
         <Typography className="month" sx={{fontFamily:'Inter', fontSize:'10px',fontWeight:'400',fontStyle:'normal',lineHeight:'12px'}}>Dec</Typography>
        
       </div>
     </div>
     <div className="card-footer" style={{backgroundColor:'#42BBEF'}}>
       <div className="bottom-section" style={{backgroundColor:'#42BBEF'}}>
         {/* <SvgIcon /> */}
         <img src="images/Group 1939.svg"></img>
       </div>
       <div className="bottom-right-section" style={{backgroundColor:'#42BBEF',marginRight:'15px'}}>
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
export default Card2;
