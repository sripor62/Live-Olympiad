import { Grid } from "@mui/material"
import { CustomListItem } from "../../components/CustomListItem"
import { FilterByStatus } from "../../components/FilterByStatus"
import { KnowledgeTree } from "./KnowledgeTreeBox"
import { SubjectSelector } from "../Onboarding/SubjectSelector"
import { UpgradeBox } from "./UpgradeBox"
import { MobileDashboard } from "./MobileDashboard"

export const DashboardLayout = (props) => {
    return <Grid container mt={2} style={{ padding: 1 }}>
        <Grid item p={2} xs={12} sm={12} md={8} lg={7}>
            <Grid container sx={{ display: { xs:"block",lg:"none"},p:2}}>
                <Grid item xs={12}>
                    <MobileDashboard />
                </Grid>
            </Grid>
            <Grid container mb={5}  alignItems='center'>
                <Grid item xs={12} md={12} lg={8}><SubjectSelector /></Grid>
                <Grid item  xs={12} md={12} lg={4}><FilterByStatus open={props.open} anchorEl={props.anchorEl} handleClick={props.handleClick} handleClose={props.handleClose} /></Grid>
            </Grid>
            {
                props.testsLists?.map((option) => {
                    return <CustomListItem option={option}/>
                })
            }
        </Grid>
        <Grid item p={2} md={4} lg={5} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
            <UpgradeBox />
            <KnowledgeTree />
        </Grid>
    </Grid>
}