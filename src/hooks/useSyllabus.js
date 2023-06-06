import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";

export const useSyllabus = () => {
    const getSyllabus = async (body) => {
        //const endpoint = environment.userBaseUrl + Endpoints.SYLLABUS;
        return await axiosInstance().get("https://rhjm5wzm9k.execute-api.ap-south-1.amazonaws.com/live/items/scope?subject=Maths&grade=Class-01");
    };
    return {
        getSyllabus
    }
};