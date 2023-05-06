import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useStore } from "../stores";
import { useStudent } from "../hooks/useStudent";
import { useNavigate, useParams } from "react-router-dom";
import useSessionHelper from "../hooks/useSession";
import { ReportsLayout } from "../designs/Reports/ReportsLayout";

const ReportView = () => {
	const currentUser = useStore((state) => state.currentUser);
	const urlParams = new URLSearchParams(window.location.search);
	const packageId = urlParams.get("packageId");
	const { getPackage } = useStudent();
	const { getReportFilter } = useSessionHelper();
	const [newTestList, setNewTestList] = useState();

	// Package Data
	const { data: packageData, isLoading } = useQuery(
		["Package", packageId],
		() => getPackage(packageId),
		{ enabled: !!packageId }
	);
	// User Session's Report
	const { data: ReportData } = useQuery(
		[`ReportData`],
		() => getReportFilter({ userId: currentUser.id, packageId: packageId }),
		{ enabled: true, retry: false }
	);

	useEffect(() => {
		if (ReportData && packageData?.data) {
			let newList = packageData?.data?.questions.map((data, i) => {
				var pData = {
					...data,
					correctAnswer: ReportData?.data?.data[0].answers[i]?.correctIndex,
					submitedAnswer: ReportData?.data?.data[0].answers[i]?.answerIndex,
					result:
						ReportData?.data?.data[0].answers[i]?.answerIndex === -1
							? null
							: ReportData?.data?.data[0].answers[i]?.correctIndex ===
							  ReportData?.data?.data[0].answers[i]?.answerIndex,
				};
				return pData;
			});
			setNewTestList(newList);
		}
	}, [ReportData, packageData]);

	return (
		<ReportsLayout
			isLoading={isLoading}
			ReportData={ReportData?.data?.data[0]}
			newTestList={newTestList}
		/>
	);
};

export default ReportView;
