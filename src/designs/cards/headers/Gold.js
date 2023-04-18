import { Box, Grid,Typography,Button,useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { UilTimes } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const GoldHeader= () => {
     const navigate = useNavigate();
     const isSmallScreen = useMediaQuery("(max-width:600px)");
     const theme = useTheme()
  return (
            <Grid container spacing={1} minHeight={{ xs: 160, sm: 140 }}>
              <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="column">                  
                <Box sx={{backgroundColor:'#4545A5',borderRadius:'10px 10px 0px 0px', 
                      height:'140px',width:{xs:'100%',sm:'100%'}}}>
                  <Button  sx={{color:'#FFFFFF',marginLeft: { xs: "87%", sm: "93%" }}}>
                    <UilTimes onClick={() => {navigate('/dashboard')}}/>
                  </Button>
                  <Box sx={{marginLeft:'2%',marginTop:'-20px'}}>
                    <Typography 
                      style={{fontFamily:'Inter', 
                      fontSize:'24px',fontStyle:'normal',
                      fontWeight:'700',lineHeight:'29px',
                      color:'#FFFFFF'}}>
                        MATHS OLYMPIAD - Regional</Typography>
                    <Typography 
                      style={{fontFamily:'Inter',
                      fontSize:'14px',
                      fontStyle:'normal',
                      fontWeight:'400',
                      lineHeight:'17px',
                      color:'#FFFFFF'}}>
                        Cambridge School</Typography>
                    <img src="images/maths.png" alt="maths71"/>
                    <Box sx={{
                        background:'#FFFFFF',borderRadius:'15px',
                        width:'48px',height:'48px',alignItems:'center',
                        justifyContent:'center',display:'flex',
                        flexDirection:'column',marginTop: { xs: "-16%", sm: "-9%" },
                        marginLeft: { xs: "30%", sm: "48%" },
                        position: "relative",
                        zIndex: 1,
                        [theme.breakpoints.down("xs")]: {
                            marginLeft: "30%",
                            width: "36px",
                            height: "36px",
                            marginTop: "-14%",
                          },
                        }}>
                    <Typography 
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { xs: "18px", sm: "21px" },
                        fontWeight: 400,
                        fontStyle: "normal",
                        lineHeight: { xs: "22px", sm: "25px" },
                        color: "#000000",
                        marginBottom: { xs: "3px", sm: 0 },
                      }}>12</Typography>
                    <Typography 
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { xs: "10px", sm: "12px" },
                        fontWeight: 400,
                        fontStyle: "normal",
                        lineHeight: { xs: "10px", sm: "12px" },
                        color: "#000000",
                      }}>Nov</Typography>
                  </Box> 
                  <Box sx={{
                            position: "absolute",
                            top: { xs: "43.5%", sm: "17%" },
                            left: { xs: "70%", sm: "76%" },
                            transform: { xs: "translate(-50%, -50%)", sm: "none" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            transition: "all 0.3s ease-in-out",
                            width:{xs:'60%',sm:'20%'},
                            [theme.breakpoints.down("xs")]: {
                                opacity: 10,
                            },
                            }}>
                    <Typography
                      style={{fontFamily:'Inter', 
                      fontSize: { xs: "4px", sm: "12px" },
                      fontStyle:'normal',
                      fontWeight:'500',lineHeight: { xs: "2px", sm: "12px" },
                      marginTop: { xs: "-5px", sm: "-1%" },
                      marginBottom: { xs: "2px", sm: 0 },
                      color:'#FFFFFF'}}>QUALIFYING STATUS</Typography>
                    <Box sx={{ marginTop: { xs: "-5px", sm: "0%" } }}>
                      <img src="images/badge.png" alt="Badge" />
                    </Box>
                    <Typography 
                      sx={{fontFamily: "Inter",
                            fontSize: { xs: "12px", sm: "14px" },
                            fontWeight: 700,
                            fontStyle: "normal",
                            lineHeight: { xs: "14px", sm: "17px" },
                            color: "#FFFFFF",
                            marginTop: { xs: "-7px", sm: "0%" },}}>
                         Qualified for Nationals
                    </Typography> 
                  </Box> 
                  </Box>
                </Box>
              </Grid>
            </Grid>
  );

}
export default GoldHeader;