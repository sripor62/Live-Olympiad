import { Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import Sidebar from "../../components/Sidebar";
import { SubjectSelector } from "../Onboarding/SubjectSelector";
import { FilterByStatus } from "../../components/FilterByStatus";
import { UpgradeBox } from "./UpgradeBox";
import { KnowledgeTree } from "./KnowledgeTreeBox";
import { CustomListItem } from "../../components/CustomListItem";
import { useStore } from "../../stores";

export default function HomeLayout(props) {
	const clearCurrentUser = useStore((state) => state.clearCurrentUser);
	return (
		<Grid container>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<Header logOutHandler={clearCurrentUser} />
			</Grid>

			<Grid item xs={12} sm={12} md={2} lg={2}>
				<Sidebar seriesName={props.seriesName}/>
			</Grid>
			<Grid item xs={12} sm={12} md={10} lg={10} padding={1}>
				{props.children}
			</Grid>
		</Grid>
	);
}
