import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";

export const useSyllabus = () => {
    const getSyllabus = async (body) => {
        const endpoint = environment.syllabusUrl ;
        return await axiosInstance().get(endpoint);
    };
    return {
        getSyllabus
    }
};