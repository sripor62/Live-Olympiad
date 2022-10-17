import { Box, Grid, Typography } from "@mui/material"
import { CenterButton } from "../../components/CenterButton"
import { SubjectBox } from "../../components/SubjectBox"

export const UpgradeBox = () => {
    return <Grid container item md={12} lg={12} mt={2} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '24px', marginBottom: '20px' }}>
        <Grid item md={12} lg={12} >
            <Typography variant='subtitle' justifyContent="center" alignItems="center"><Box mb={3} mt={1} sx={{fontFamily:"Urbantist",fontWeight:500,fontSize:'14px'}}>You're Currently on 2 Subjects Subscription,   upgrade license to avail more benefits!</Box></Typography>
        </Grid>
        <SubjectBox text="Mathematics" color="#4545A5" borderRadius="10px" border="1px solid #4545A5"/>
        <SubjectBox text="Science" color="#42BBEF" borderRadius="10px" border="1px solid #42BBEF"/>
        <SubjectBox text="English" color="red" borderRadius="10px" border="1px solid red"/>
        <CenterButton 
            text="Upgrade" 
            color='#FFFFFF'
            buttonColor='secondary'
            borderRadius="57px"
            width='163px'
            p='0px 0px 15px 50px'
            height='48px'
        />
    </Grid>
}