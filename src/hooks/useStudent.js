
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";



export const useStudent = () => {
    
    const profileDataDetails = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.ADD_PROFILE ;
        return await axiosInstance().post(endpoint, (body.data));
    };

    const getProfile = async () => {
        const endpoint = environment.userBaseUrl + Endpoints.ADD_PROFILE ;
        return await axiosInstance().get(endpoint);
    };
    const sendEducation = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.ADD_EDUCATiON +"/" + body.userId;
        return await axiosInstance().post(endpoint, (body.data));
    };

    const getEducation = async (userId) => {
        const endpoint = environment.userBaseUrl + Endpoints.GET_EDUCATION + "/" + userId + Endpoints.GET_EDUCATION_END;
        return await axiosInstance().get(endpoint);
    };
    const getPersonalData = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.GET_PERSONAL_INFO;
        return await axiosInstance().get(endpoint);
    };
    const sendPersonalData = async (body) => {
        const endpoint = environment.userBaseUrl + "/admin" + Endpoints.GET_PERSONAL_INFO + "/" + body.userId;
        return await axiosInstance().post(endpoint, (body.data));
    };
    return {
        profileDataDetails,
        getProfile,
        getEducation,
        sendEducation,
        getPersonalData,
        sendPersonalData

    }
};