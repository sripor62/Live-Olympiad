import { Grid } from "@mui/material"
import { CustomListItem } from "../../components/CustomListItem"
import { FilterByStatus } from "../../components/FilterByStatus"
import { KnowledgeTree } from "./KnowledgeTreeBox"
import { SubjectSelector } from "../Onboarding/SubjectSelector"
import { UpgradeBox } from "./UpgradeBox"
import { MobileDashboard } from "./MobileDashboard"

export const DashboardLayout = (props) => {
    return <Grid container mt={1}>
        <Grid item p={2} xs={12} sm={12} md={8} lg={7}>
            <Grid container mb={5}  alignItems='center'>
                <Grid item xs={12} md={12} lg={8}><SubjectSelector setPage={props.setPage} /></Grid>
                { <Grid item  xs={12} md={12} lg={4}><FilterByStatus setPage={props.setPage} open={props.open} anchorEl={props.anchorEl} handleClick={props.handleClick} handleClose={props.handleClose} /></Grid> }
            </Grid>
            {props.page===0 &&
                props?.testsLists?.map((option) => {
                    return <CustomListItem option={option} key={option._id} testScreen={props.testScreen}/>
                })
            }
            {props.page===1 && props?.testsLists.filter((item)=> {return item.subject[0]==="Science"}).map((option) => {
                    return <CustomListItem option={option} key={option._id} testScreen={props.testScreen}/>
                })

            }
            {
                props.page===2 && props?.testsLists.filter((item)=> {return item.subject[0]==="Math"}).map((option) => {
                    return <CustomListItem option={option} key={option._id} testScreen={props.testScreen}/>
                })
            }
            {
                props.page===3 && props?.testsLists.filter((item)=> {return item.subject[0]==="English"}).map((option) => {
                    return <CustomListItem option={option} key={option._id} testScreen={props.testScreen}/>
                })
            }
            {
                props.page===4 && props?.testsLists.filter((item)=> {return item.testStatus && item.attemptedQuestions===item.totalMarks}).map((option) => {
                    return <CustomListItem option={option} key={option._id} testScreen={props.testScreen}/>
                })
            }
            {
                props.page===5 && props?.testsLists.filter((item)=> {return item.testStatus && item.attemptedQuestions!==item.totalMarks}).map((option) => {
                    return <CustomListItem option={option} key={option._id} testScreen={props.testScreen}/>
                })
            }
            {
                props.page===6 && props?.testsLists.filter((item)=> {return item.testStatus==false || item.testStatus===undefined}).map((option) => {
                    return <CustomListItem option={option} key={option._id} testScreen={props.testScreen}/>
                })
            }
        </Grid>
        <Grid item p={2} md={4} lg={5} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
            {/* <UpgradeBox />
            <KnowledgeTree /> */}
        </Grid>
    </Grid>
}