import React from 'react'
import { Box, Grid, Chip, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MemoryIcon from '@mui/icons-material/Memory';

const ReportSider = () => {
  return (
    <Box p={6}>
      <Grid container justifyContent='center' alignItems="center">
        <Grid item><Chip label="Maths" color="primary" className='brb_0'/></Grid>
        <Box sx={{ borderRadius: "20px", backgroundColor:"#F7F8F9", p: 6 }}>
          <Grid item xs={10} mb={2}>
            <Typography variant='Subtitle2'>Numbers and Algebra<ArrowForwardIosIcon sx={{ fontSize: 'small' }} />Number Knowledge<ArrowForwardIosIcon sx={{ fontSize: 'small' }} />Greater or less than numbers</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant='h6'>Explanation</Typography>
          </Grid>
          <Grid item xs={12} mb={4}>
            <Typography variant='Subtitle2'>Count of students in Class 8,Section A is 24.This is 1 more than Count in class 8,Section B</Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant='Subtitle2' align='center'><Box sx={{ borderRadius: "10px", backgroundColor: 'white', display: 'flex', p: 1 }}><MemoryIcon />Cognitive Complexity</Box></Typography>
              <Typography variant='Subtitle2' align='center'><Box sx={{ borderRadius: "10px", backgroundColor: '#4545A5', color: 'white', p: 1 }}>Understanding</Box></Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='Subtitle2' align='center'><Box sx={{ borderRadius: "10px", backgroundColor: 'white', display: 'flex', p: 1 }}><MemoryIcon />Subject Skill</Box></Typography>
              <Typography variant='Subtitle2' align='center'><Box sx={{ borderRadius: "10px", backgroundColor: '#4545A5', color: 'white', p: 1 }}>Comparing whole numbers</Box></Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}

export default ReportSider