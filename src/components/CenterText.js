import { Grid, Typography } from "@mui/material"
import { propsToClassKey } from "@mui/styles"
import { Box } from "@mui/system"

export const CenterText = (props) => {
    return <Grid item md={12} lg={12}>
        <Typography variant={props.variant}><Box align="center" sx={{ color: props.color, fontFamily: props.fontFamily, fontWeight: props.fontWeight,fontSize: props.fontSize}}>{props.text}</Box></Typography>
    </Grid>
}