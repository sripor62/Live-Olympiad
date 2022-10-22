import { Chip, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { CustomButton } from "./CustomButton"
import RefreshIcon from '@mui/icons-material/Refresh';

export const CustomListItem = () => {
    return <Box>
        <Chip label="Science" color="primary" className='brb_0' sx={{fontFamily:'Urbantist',fontSize:"16px",fontWeight:600,width:"106px",height:"30px"}} />
        <Grid container item xs={12} sm={12} md={12} lg={12} style={{ backgroundColor: '#F7F8F9', borderRadius: '0px 20px 20px 20px', padding: '20px', marginBottom: '20px' }}>

            <Grid item xs={4} sm={6} md={6} lg={4} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <Typography variant='body1'><Box mb={1} sx={{fontFamily:'Urbantist',fontSize:"18px",fontWeight:600}}>Test Name</Box></Typography>
                <Typography variant='body2'><Box mb={1} sx={{fontFamily:'Urbantist',fontWeight:500,color:'rgba(106,112,124,1)'}}>Practice Test</Box></Typography>
            </Grid>
            <Grid item xs={8} sm={6} md={6} lg={8} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography sx={{ fontSize: "18px", display: 'flex'}} ><Box sx={{ fontSize: '50px', color: 'green' }}>19</Box><Box sx={{ mt: 4 ,mr:4}}>/20</Box></Typography>
                <CustomButton btnText="RE-TAKE" endIcon={<RefreshIcon/>} variant="contained"  sx={{width:'105px',height:{xs:"34px",lg:'36px'},fontSize:{xs:"8px",lg:'12px'},backgroundColor:"#838BA1" ,fontWeight:600}}/>
            </Grid>
        </Grid>
    </Box>
}