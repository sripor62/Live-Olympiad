
import { Button, Chip, Grid, Link, Paper, Stack, Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CustomSnackbar } from '../../components/CustomSnackbar'
import { CustomButton } from '../../components/CustomButton';
import { responsiveStype } from '../../beautifiers/responsive';
import { Document, Page } from "react-pdf";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
let unSelectedStyle = {
  backgroundColor: 'rgba(255,252,237,1)',
  borderRadius: '20px',
  padding: '20px',
  marginBottom: '10px'
}
let selectedStyle = {
  borderRadius: '20px',
  padding: ' 20px 25px',
  marginBottom: '10px',
  border: '3px solid rgba(222,221,210,1)'
}

let selectdChip = {
  color: "white",
  fontSize: '12px',
  border: '3px solid green',
  backgroundColor: 'green',
  fontSize: '12px',
  fontFamily: "Urbanist",
  fontWeight: 600
}
let unSelectedChip = {
  color: "green",
  fontSize: '12px',
  border: '3px solid green',
  backgroundColor: 'white',
  fontSize: '12px',
  fontFamily: "Urbanist",
  fontWeight: 600
}
let disabledChip = {
  color: "white",
  fontSize: '12px',
  border: '3px solid #838BA1',
  backgroundColor: '#838BA1',
  fontSize: '12px',
  fontFamily: "Urbanist",
  fontWeight: 600
};
const BookletLayout = (props) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  var grade = window.localStorage.getItem("grade")
  var pdfdwn = JSON.parse(grade)
  console.log(pdfdwn)
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('SamplePDF.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        if (pdfdwn === "6")
          alink.href = "https://liveolympiad.org/wp-content/uploads/2022/06/LiveOlympiad-Class-6-Book-1.pdf"
        else if (pdfdwn === "3")
          alink.href = "https://liveolympiad.org/wp-content/uploads/2022/06/Class-3-31-J-1.1.pdf"
        else
          alink.href = `https://liveolympiad.org/wp-content/uploads/2022/06/LO-BOOK-Class-${pdfdwn}.pdf`;
        alink.download = 'SamplePDF.pdf';
        alink.click();
      })
    })
  }

  return <Grid container >
    <Grid item xs={12} sm={12} md={10} lg={6} p={4}>
      <Grid container style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '10px' }} spacing={2}>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontSize: "16px", fontWeight: 500, fontFamily: "Urbanist" }}>
            <Box mb={2} sx={{ textAlign: "center" }}>You are Currently on 0 Subject Subscription, upgrade license to avail more benefits!</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container style={selectedStyle} >
            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: "16px" }, fontFamily: "Urbanist" }}>Maths</Box></Typography>
            </Grid>
            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: "16px" }, fontFamily: "Urbanist" }}>Science</Box></Typography>
            </Grid>
            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: "16px" }, fontFamily: "Urbanist" }}>English</Box></Typography>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Stack direction={{ xs: "column", sm: "row", md: "row", lg: "row" }} spacing={2}>
                <Chip label="Read" sx={selectdChip}>
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={"https://liveolympiad.org/wp-content/uploads/2022/06/Class-3-31-J-1.1.pdf"} />
                  </Worker>
                </Chip>
                <Chip label="Download" onClick={onButtonClick} sx={selectdChip} />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}
export default BookletLayout;
