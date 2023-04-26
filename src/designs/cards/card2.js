import { Box, Grid,Typography } from "@mui/material";
import "./card.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { usePayment } from "../../hooks/usePayment";
import { useStore } from "../../stores";
import { useQuery } from "react-query";
import { navigateAsPerSessionValidity } from "../../services/helpers";
const Card2 = () => {
  const navigate = useNavigate();
  const {getUserPaymentInfo,getSubscriptions} = usePayment();
  const [isEnrolled,setIsEnrolled] = useState(false);
  const [data, setData] = useState();
  const [subscriptionList, setSubscriptionList] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const [subscribeCourses, setSubscribeCourses] = useState();
  
  const currentUser = useStore((state) => state.currentUser);
  const { data: SubscriptionData, isLoading: subscriptionsLoader } = useQuery(
    [`SubscriptionData`],
    () => getSubscriptions(currentUser?.id),
    { enabled: true, retry: false }
  );
  const { data: PaymentData, isLoading: PaymentLoader } = useQuery(
    [`PaymentData`],
    () => getUserPaymentInfo(currentUser?.id),
    { enabled: true, retry: false }
  );
  useEffect(() => {
    setSubscriptionList(SubscriptionData?.data?.data);
  }, [SubscriptionData]);
  useEffect(() => {
    const getSubscriptions = async () => {
      try {
        const response = await getSubscriptions(currentUser.userId);
        const data = response.data;
        setData(data);
        setIsEnrolled(data.some(item => item.userId === currentUser.userId));
      } catch (error) {
        console.log(error);
      }
    };
    getSubscriptions();
  }, [currentUser.userId]);
  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });
  useEffect(() => {
    setPaymentStatus(paymentStatus?.data?.data?.filter((item) => item.status !== "created"));
    setSubscribeCourses(subscribeCourses?.data?.data.filter((item)=> item.status !==""))
  }, [paymentStatus, subscribeCourses?.data?.data]);
  const body = {
    "studentReport":{
        'correct': 1,
        'incorrect': 1,
        'total': 2,
        'rank': 2,
        'score': 10,
        'isGold':0,
        'isSilver':1,
        'isTopper':2,
        'percentile':3 * 100
    },
    'maxScore': '100',
    'packageReport': {
        'avg': { 
            'rank': 1,
            'score': 1,
            'percentile': 1 * 100
        },
        'top': {
            'rank': 1,
            'score': 1,
            'percentile': 1 * 100
        }
    }
}
const handleEnrollClick = () => {
  if (paymentStatus) {
    navigate("/silver");
  } else {
    navigate("/subscription");
  }
};

  return (
       <Box sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
        <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
          <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center">
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
                <img src="images/Group 1939.svg" alt="group 1939"></img>
              </div>
              {subscribeCourses && paymentStatus ? (
                <div className="bottom-right-section" style={{backgroundColor:'#42BBEF',marginRight:'15px'}}>
                    <Typography sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Enroll</Typography>
                  <img src="../images/Arrow6.svg" alt="Arrow"  sx={{color:'#FFFFFF', fontSize:42}} onClick={() => {navigate('/subscription')}}/>
                </div>
              ):(
              
              <div className="bottom-right-section" style={{backgroundColor:'#42BBEF',marginRight:'15px'}}>
                  <Typography sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Result</Typography>
                <img src="../images/Arrow6.svg" alt="Arrow"  sx={{color:'#FFFFFF', fontSize:42}} onClick={() => {navigate('/Silver')}}/>
              </div>
          )}
              
            </div>
          </div>
          
          </Grid>
        </Grid>
    </Box>
    
  );
};

export default Card2;
