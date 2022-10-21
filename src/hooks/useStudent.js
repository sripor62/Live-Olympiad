
import { Endpoints } from "../constants/endpoints";
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

    return {
        profileDataDetails,
        getProfile,
    }
};