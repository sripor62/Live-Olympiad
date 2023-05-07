import { Grid } from "@mui/material";
import Card1 from "../cards/card1";
import Card2 from "../cards/card2";
import Card3 from "../cards/card3";
import Card4 from "../cards/card4";
import { useQuery } from "react-query";
import useSessionHelper from "../../hooks/useSession";
import { useStore } from "../../stores";
import { useSchool } from "../../hooks/useSchool";
import { useEffect } from "react";

const Card = () => {
	const currentUser = useStore((state) => state.currentUser);
	const { getReportFilter } = useSessionHelper();
	const { data: ReportFilter } = useQuery(
		[`ReportData`],
		() => getReportFilter({ userId: currentUser.id }),
		{ enabled: true, retry: false }
	);

	const { getSchoolById } = useSchool();
	const { data: SchoolData } = useQuery(
		[`School`, ReportFilter?.data?.data[0]],
		() => getSchoolById(ReportFilter?.data?.data[0].schoolId),
		{ enabled: !!ReportFilter, retry: false }
	);

	useEffect(() => {
		sessionStorage.setItem("school", JSON.stringify(SchoolData?.data?.data));
	}, [SchoolData]);

	return (
		<Grid
			container
			spacing={2}
			sx={{ flexGrow: 1, marginLeft: "10px", width: "100%" }}
		>
			{ReportFilter?.data?.data?.map((session) => {
				return (
					<Grid item xs={12} sm={6} md={3}>
						<Card1 session={session} />
					</Grid>
				);
			})}
			{/* <Grid item xs={12} sm={6} md={3}>
      <Card2 />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Card3 />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Card4 />
    </Grid> */}
		</Grid>
	);
};

export default Card;
