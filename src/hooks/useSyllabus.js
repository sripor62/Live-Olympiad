import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";

export const useSyllabus = () => {
    const getSyllabus = async () => {
        const endpoint = environment.syllabusUrl + '/scope';
        return await axiosInstance().get(endpoint);
    };
    const getSyllabusByTags = async (body) => {
        if(body.grade && body.subject){
        const endpoint = environment.syllabusUrl + `/scope?class=${body.grade}&subject=${body.subject}`;
        return await axiosInstance().get(endpoint);
        }
    };
    return {
        getSyllabus,
        getSyllabusByTags
    }
};