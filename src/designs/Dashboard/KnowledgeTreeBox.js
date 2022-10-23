import { Box, Grid } from "@mui/material"
import { CenterButton } from "../../components/CenterButton"
import { CenterText } from "../../components/CenterText"

export const KnowledgeTree = () => {
    return <Grid container  style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '30px', marginBottom: '20px' }}>
        <Grid item md={12} lg={12} >
        <CenterText text="LiveOlympiad" variant='h4' fontFamily="Urbantist" fontWeight='700' fontSize="24px"/>
        <CenterText text="Knowledge Tree" variant='h4' fontFamily="Urbantist" fontWeight='700' fontSize="24px"/>  
        <Box height={20}/>
        <CenterText 
            text="Learn about Exempler & Challenger Series,Evaluation Criteria.About Live Olympiad,Queries & FAQs,Syllabus through an automated Chatbot." 
            variant='body2' 
            fontFamily="Urbantist" 
            color="#6A707C"
        />
        <Box height={25}/>
        <CenterButton 
            text="GET STARTED" 
            width='191px' 
            p='0px 0px 15px 50px' 
            height='48px' 
            buttonColor="primary"
            color='#FFFFFF'
        />
        </Grid>
    </Grid>
}