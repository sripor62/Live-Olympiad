import { Box, Grid,Typography,Button,useTheme } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { UilTimes } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const BronzeHeader= () => {
     const navigate = useNavigate();
     const isSmallScreen = useMediaQuery("(max-width:600px)");
     const theme = useTheme()
  return (
            <Grid container spacing={1} minHeight={{ xs: 160, sm: 140 }}>
              <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="column">                  
                <Box sx={{backgroundColor:'#4545A5',borderRadius:'10px 10px 0px 0px', height:'140px',width:'100%'}}>
                  <Button onClick={() => {navigate('/dashboard')}} sx={{color:'#FFFFFF',marginLeft: { xs: "87%", sm: "94%" }}}>
                    <UilTimes />
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
                            top: { xs: "41%", sm: "-35%" },
                            left: { xs: "76%", sm: "40%" },
                            transform: { xs: "translate(-50%, -50%)", sm: "none" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            opacity: { xs: 1, sm: 1 },
                            transition: "all 0.3s ease-in-out",
                            [theme.breakpoints.down("xs")]: {
                                opacity: 10,
                            },
                            }}>
                    <Typography
                      style={{fontFamily:'Inter', 
                      fontSize: { xs: "10px", sm: "12px" },
                      fontStyle:'normal',
                      fontWeight:'500',lineHeight: { xs: "12px", sm: "2px" },
                      marginTop: { xs: "10px", sm: "2%" },
                      marginBottom: { xs: "2px", sm: 0 },
                      color:'#FFFFFF'}}>QUALIFYING STATUS</Typography>
                    <Box sx={{ marginTop: { xs: "6px", sm: "2%" } }}>
                      <img src="images/hourglass.png" alt="Hourglass" />
                    </Box>
                    <Typography 
                      sx={{fontFamily: "Inter",
                            fontSize: { xs: "12px", sm: "14px" },
                            fontWeight: 700,
                            fontStyle: "normal",
                            lineHeight: { xs: "14px", sm: "17px" },
                            color: "#FFFFFF",
                            marginTop: { xs: "6px", sm: "1%" },}}>
                        Result Yet to be Published
                    </Typography> 
                  </Box> 
                  </Box>
                </Box>
              </Grid>
            </Grid>
  );

}
export default BronzeHeader;