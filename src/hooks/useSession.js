import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/api.service";
import { environment } from "../environments/environment";
import { jsonToQuery } from "../services/helpers";

const useSessionHelper = () => {
	const getReportFilter = async (query) => {
		let queryString = jsonToQuery(query);
		let url = environment.sessionsUrl + `/sessions/reportsnew?${queryString}`;
		return await axiosInstance(false).get(url);
	};
	const StudentsReport = async (packageId) => {
		let url = `https://522rowf3da.execute-api.ap-south-1.amazonaws.com/live/reports/${packageId}/result`;
		return await axiosInstance(false).get(url);
	};

	return {
		getReportFilter,
		StudentsReport,
	};
};
export default useSessionHelper;
