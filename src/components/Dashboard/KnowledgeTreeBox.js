import { Box, Grid } from "@mui/material"
import { CenterButton } from "../CenterButton"
import { CenterText } from "../CenterText"

export const KnowledgeTree = () => {
    return <Grid container md={12} lg={12} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '30px', marginBottom: '20px' }}>
        <CenterText text="LiveOlympiad" variant='h4' fontFamily="Urbantist" fontWeight='700' fontSize="24px"/>
        <CenterText text="Knowledge Tree" variant='h4' fontFamily="Urbantist" fontWeight='700' fontSize="24px"/>  
        <Box height={40}/>
        <CenterText 
            text="Learn about Exempler & Challenger Series,Evaluation Criteria.About Live Olympiad,Queries & FAQs,Syllabus through an automated Chatbot." 
            variant='body2' 
            fontFamily="Urbantist" 
            color="#6A707C"
        />
        <Box height={75}/>
        <CenterButton 
            text="GET STARTED" 
            width='191px' 
            p='0px 0px 15px 50px' 
            height='48px' 
            buttonColor="primary"
            color='#FFFFFF'
        />
    </Grid>
}