
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";


const useTests=()=>{

    const getTestList = async (body) => {
        if(body.grade){
            let mock = (body.school !== "5890d4a4-348f-4a1c-98b3-1fc926c30a19" && environment.env !== "school") ? 'true' : "false";
            const endpoint = environment.testLiveolympiad + Endpoints.PACKAGES  + `&grade=${body.grade}&mock=${mock}` ;
            return await axiosInstance().get(endpoint);
        }
    };

    return{
        getTestList
    };
}   
export default useTests;