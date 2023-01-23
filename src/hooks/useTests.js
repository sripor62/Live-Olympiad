
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";


const useTests=()=>{

    const getTestList = async (body) => {
        if(body.grade){
            let mock = (environment.env !== "school") ? 'true' : "false";
            const endpoint = environment.testLiveolympiad + Endpoints.PACKAGES  + `&tagNames=${body.grade}&mock=${mock}` ;
            return await axiosInstance().get(endpoint);
        }
    };

    return{
        getTestList
    };
}   
export default useTests;