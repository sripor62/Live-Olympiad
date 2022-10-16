import { Grid } from "@mui/material"
import { CustomButton } from "./Button"

export const CenterButton = (props) => {
    return <Grid item md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton btnText={props.text} color={props.buttonColor} variant="contained" sx={{ color: props.color ,width: props.width, p: props.p, height: props.height, borderRadius:props.borderRadius }}/>
    </Grid>
}