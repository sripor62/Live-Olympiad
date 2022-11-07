
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";


const useTests=()=>{

    const getTestList = async (grade) => {
        if(grade){
            const endpoint = environment.testLiveolympiad + Endpoints.PACKAGES  + `&grade=${grade}` ;
            return await axiosInstance().get(endpoint);
        }
    };
    const createTest = async (body) => {
        const endpoint = environment.testLiveolympiad + Endpoints.TESTS ;
        return await axiosInstance().post(endpoint,body);
    };
    const getPackageList = async () => {
        const endpoint = environment.testLiveolympiad + Endpoints.PACKAGE_LIST ;
        return await axiosInstance().get(endpoint);
    };

    return{
        getTestList,
        createTest,
        getPackageList
    };
}   
export default useTests;