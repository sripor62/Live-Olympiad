import { Grid, Typography, Box } from "@mui/material";
import { SubjectSelector } from "../Onboarding/SubjectSelector";
import {ReportsLayout} from "../Reports/ReportsLayout"; 

export const ReportLayout = (props) => {
	return (
		<Grid container mt={1}>
			<Grid item p={2} xs={12} sm={12} md={8} lg={7}>
				<Typography variant="h6">Report</Typography>
				<Grid item xs={12}>
                <Box fontWeight={600} sx={{ fontSize: { xs: "12px", lg: "14px" }, color: "#838BA1" }}>
                    <Box mb={3}>Clicking on these buttons will take you to {props.seriesName} report</Box>
                </Box>
            </Grid>
				<Grid container mb={5} alignItems="center">
					<Grid item xs={12} md={12} lg={8}>
						<SubjectSelector setPage={props.setPage} text={props.seriesName}/>
					</Grid>
				</Grid>
				{props.seriesName === "Screening" && props.page === 1 && props.repData && (
                <ReportsLayout repData={props.repData}/>
                )}


						
				{props.seriesName === "Practice" && props.page === 1 && props.repData && (
                <ReportsLayout repData={props.repData}/>
                )}

				{props.seriesName === "Practice" && props.page === 2 && props.repData && (
                <ReportsLayout repData={props.repData}/>
                )}


				{props.seriesName === "Practice" && props.page === 3 && props.repData && (
                <ReportsLayout repData={props.repData}/>
                )}
				
			</Grid>
		</Grid>
	);
};