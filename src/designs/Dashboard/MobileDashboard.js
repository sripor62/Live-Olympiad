
import { Box, Typography,Grid } from "@mui/material"
import { CenterButton } from "../../components/CenterButton"
import { CenterText } from "../../components/CenterText"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const MobileDashboard = (props) => {
    return <>
        <Grid container>
            <Grid item>
             <Grid container p={2} mb={2} xs={12} sm={12} alignItems='center' sx={{ display: { xs: 'flex', sm:'flex', md:'none', lg: 'none' }, backgroundColor: '#F7F8F9', borderRadius: '20px' }} >
                <Grid  item xs={8} sm={9} >
                    <Typography variant='subtitle'sx={{fontFamily:"Urbanist",fontSize:"11px",fontWeight:500}}>
                        <Box>You're Currently on the free plan, upgrade for more benefits!</Box>
                    </Typography>
                </Grid>
                <Grid xs={4} sm={3}>
                    <Button endIcon={<KeyboardArrowDownIcon />} sx={{ backgroundColor: '#FCBD42', color: '#FFFFFF',width: "104px",height: "34px" }}>Upgrade</Button>
                </Grid>
            </Grid>
            <Grid container xs={12} sm={12} mb={4} pl={2} alignItems='center' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, backgroundColor: '#F7F8F9', borderRadius: '20px' }}>
                <Grid xs={7} sm={11} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='subtitle' sx={{ color: '#4545A5', fontWeight: '600' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            KNOWLEDGE TREE
                            <Tooltip title='Learn about Exempler & Challenger Series, Evaluation Criteria, About Live Olympiad, Queries & FAQs, Syllabus through an automated Chatbot.' arrow>
                                <IconButton>
                                    <InfoOutlinedIcon sx={{ color: '#4545A5' }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Typography>
                </Grid>
                <Grid xs={5} sm={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{ backgroundColor: '#4545A5', color: '#FFFFFF' }}><ArrowForwardIosIcon /></Button>
                </Grid>
            </Grid> 
            </Grid>
        </Grid>
    </>
}