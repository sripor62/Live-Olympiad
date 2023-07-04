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
	const StudentsReport = async (packageId, userToken) => {
		let url = environment.reportsBaseUrl + `/${packageId}/result`;
		return await axiosInstance().get(
			url,
			{ headers: { Authorization: "Bearer " + userToken } }
			);
	};

	return {
		getReportFilter,
		StudentsReport,
	};
};
export default useSessionHelper;
