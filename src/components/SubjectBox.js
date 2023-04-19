import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from 'react';
export const SubjectBox = (props) => {
    return <Grid item md={12} lg={12} sx={{borderRadius: props.borderRadius, border: props.border}} mb={1}>
        <Box>
            <Typography p={1} color={props.color} fontFamily="Urbanist" fontWeight={600} fontSize="16px">{props.text}</Typography>   
        </Box>
    </Grid>
}