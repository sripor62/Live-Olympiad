import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";

export const useSchool = () => {
	let hostname = window.location.hostname;
	let id = hostname === "tech.digishaala.com" ? "Tech" : "K12";
	const getSchools = async () => {
		const endpoint = `${environment.schoolsBaseUrl}/${Endpoints.SCHOOLS}/search?resMode=SELF&type=${id}&fields=name`;
		return await axiosInstance().get(endpoint);
	};
	const getSchool = async (pincode) => {
		const endpoint = `${environment.schoolsBaseUrl}/${Endpoints.SCHOOLS}/search?pincode=${pincode}&fields=name`;
		return await axiosInstance().get(endpoint);
	};

	const getSchoolById = async (id) => {
		const endpoint = `${environment.schoolsBaseUrl}/${Endpoints.SCHOOLS}/${id}`;
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
