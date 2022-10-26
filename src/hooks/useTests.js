
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";


const useTests=()=>{

    const getTestList = async () => {
        const endpoint = environment.testLiveolympiad + Endpoints.TESTS ;
        return await axiosInstance().get(endpoint);
    };

    return{
        getTestList
    };
}   
export default useTests;