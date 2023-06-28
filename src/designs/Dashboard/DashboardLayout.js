import { Grid, Typography, Box } from "@mui/material";
import { CustomListItem } from "../../components/CustomListItem";
import { SubjectSelector } from "../Onboarding/SubjectSelector";

export const DashboardLayout = (props) => {
	return (
		<Grid container mt={1}>
			<Grid item p={2} xs={12} sm={12} md={8} lg={7}>
				<Typography variant="h6">Practice</Typography>
				<Grid item xs={12}>
                <Box fontWeight={600} sx={{ fontSize: { xs: "12px", lg: "14px" }, color: "#838BA1" }}>
                    <Box mb={3}>Clicking on these buttons will take you to practice test</Box>
                </Box>
            </Grid>
				<Grid container mb={5} alignItems="center">
					<Grid item xs={12} md={12} lg={8}>
						<SubjectSelector setPage={props.setPage} />
					</Grid>
				</Grid>
				{props.page === 1 &&
					props?.testsLists
						?.filter((item) => {
							return item.subject[0].search("Science") !== -1;
						})
						.map((option) => {
							return (
								<CustomListItem
									testSend={props.testSend}
									option={option}
									key={option._id}
									testScreen={props.testScreen}
								/>
							);
						})}
				{props.page === 2 &&
					props?.testsLists
						?.filter((item) => {
							return item.subject[0].search("Math") !== -1;
						})
						.map((option) => {
							return (
								<CustomListItem
									testSend={props.testSend}
									option={option}
									key={option._id}
									testScreen={props.testScreen}
								/>
							);
						})}
				{props.page === 3 &&
					props?.testsLists
						?.filter((item) => {
							return item.subject[0].search("English") !== -1;
						})
						.map((option) => {
							return (
								<CustomListItem
									testSend={props.testSend}
									option={option}
									key={option._id}
									testScreen={props.testScreen}
								/>
							);
						})}
				
			</Grid>
		</Grid>
	);
};