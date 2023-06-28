import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";

export const useSyllabus = () => {
    const getSyllabus = async (body) => {
        const endpoint = environment.syllabusUrl + '/scope';
        return await axiosInstance().get(endpoint);
    };
    return {
        getSyllabus
    }
};