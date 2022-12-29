
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";



export const useSchool = () => {
    
    
    const getSchools= async () => {
        const endpoint = environment.userBaseUrl + Endpoints.SCHOOLS +`?resMode=SELF&type=${environment.institutionDomain}` ;
        return await axiosInstance().get(endpoint);
    };
    const getSchool = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.SCHOOL_PINCODE + "/" + body ;
        return await axiosInstance().get(endpoint);
    };

    const getSchoolById = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.SCHOOL+ "/" + body ;
        return await axiosInstance().get(endpoint);
    };

    const getGrades = async () => {
        const endpoint = environment.userBaseUrl + `/groups?type=${environment.institutionDomain}`
        return await axiosInstance().get(endpoint);
    }
    return {
        getGrades,
        getSchool,
        getSchoolById,
        getSchools
    }
};