import { Button, Grid, Typography } from "@mui/material";
import { CustomListItem } from "../../components/CustomListItem";
import { FilterByStatus } from "../../components/FilterByStatus";
import { Card5 } from "../cards/card5";
import { SubjectSelector } from "../Onboarding/SubjectSelector";
import Card from "./cards";
import { useNavigate } from "react-router-dom";
import { UpgradeBox } from "./UpgradeBox";
import { KnowledgeTree } from "./KnowledgeTreeBox";

export const DashboardLayout = (props) => {
	const navigate = useNavigate();
	return (
		<Grid container mt={1}>
			{/* <Grid item p={2} xs={12} sm={12} md={16} lg={12}>
				<Typography variant="h6">
					Olympiads
					<Button
						sx={{ backgroundColor: "beige", color: "black", marginLeft: "80%" }}
						onClick={() => {
							navigate("/Report");
						}}
					>
						Details Reports
					</Button>
					<Card />
				</Typography>
			</Grid> */}
			<Grid item p={2} xs={12} sm={12} md={8} lg={7}>
				<Typography variant="h6">Practice</Typography>
				<Grid container mb={5} alignItems="center">
					<Grid item xs={12} md={12} lg={8}>
						<SubjectSelector setPage={props.setPage} />
					</Grid>
					<Grid item xs={12} md={12} lg={4}>
						<FilterByStatus
							setPage={props.setPage}
							open={props.open}
							anchorEl={props.anchorEl}
							handleClick={props.handleClick}
							handleClose={props.handleClose}
						/>
					</Grid>
				</Grid>
				{props.page === 0 &&
					props?.testsLists?.map((option) => {
						return (
							<CustomListItem
								testSend={props.testSend}
								option={option}
								key={option._id}
								testScreen={props.testScreen}
							/>
						);
					})}
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
				{props.page === 4 &&
					props?.testsLists
						?.filter((item) => {
							return item.testStatus === true;
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
				{props.page === 5 &&
					props?.testsLists
						?.filter((item) => {
							return item.testStatus === false;
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
				{props.page === 6 &&
					props?.testsLists
						?.filter((item) => {
							return item.testStatus === null || item.testStatus === undefined;
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
			{/* <Grid
				item
				p={2}
				md={4}
				lg={5}
				sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
			>
				<UpgradeBox />
            <KnowledgeTree />
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Card5 />
				</Grid>
			</Grid> */}
		</Grid>
	);
};
