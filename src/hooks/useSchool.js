
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";



export const useSchool = () => {
    
    

    const getSchool = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.SCHOOL_PINCODE + "/" + body ;
        return await axiosInstance().get(endpoint);
    };

    return {
    
        getSchool,
    }
};