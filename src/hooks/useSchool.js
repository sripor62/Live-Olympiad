import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";

export const useSchool = () => {
	let hostname = window.location.hostname;
	let id = hostname === "tech.digishaala.com" ? "Tech" : "K12";
	const getSchools = async () => {
		const endpoint = `${environment.schoolsBaseUrl}/search?fields=name,pincode`;
		return await axiosInstance().get(endpoint);
	};
	const getSchool = async (pincode) => {
		const endpoint = `${environment.schoolsBaseUrl}/search?fields=name${
			pincode ? "&pincode=" + pincode : ""
		}`;
		return await axiosInstance().get(endpoint);
	};

	const getSchoolById = async (id) => {
		const endpoint = `${environment.schoolsBaseUrl}/${id}`;
		return await axiosInstance().get(endpoint);
	};

	const getGrades = async () => {
		const endpoint = environment.userBaseUrl + `/groups?type=${id}`;
		return await axiosInstance().get(endpoint);
	};
	return {
		getGrades,
		getSchool,
		getSchoolById,
		getSchools,
	};
};
