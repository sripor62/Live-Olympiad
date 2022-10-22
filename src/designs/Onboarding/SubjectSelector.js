import { Chip, Grid } from "@mui/material"
import { Stack } from "@mui/system"

export const SubjectSelector = () => {
    return <Grid mt={2}>
        <Grid item xs={12} sm={9} md={8} lg={9} >
            <Stack direction="row" spacing={2}>
                <Chip label="All" variant="outlined" sx={{ color: '#ffffff', border: '2px solid #6A707C', backgroundColor: '#6A707C', fontWeight: 600, fontSize: '12px' }} />
                <Chip label="Science" variant="outlined" sx={{ color: '#42BBEF', border: '2px solid #42BBEF', fontWeight: 600, fontSize: '12px' }} />
                <Chip label="Mathematics" variant="outlined" sx={{ color: '#4545A5', border: '2px solid #4545A5', fontWeight: 600, fontSize: '12px' }} />
                <Chip label="English" variant="outlined" sx={{ color: '#EF4255', border: '2px solid #EF4255', fontWeight: 600, fontSize: '12px' }} />
            </Stack>
        </Grid>
    </Grid>
}