import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";


const usePackages=()=>{

    const getPackages = async (body) => {
        if(body.grade && body.subject){
            const endpoint = environment.packagesBaseUrl +  `?class=${body.grade}&subject=${body.subject}&series=Mock` ;
            return await axiosInstance().get(endpoint);
        }
    };

    return{
        getPackages
    };
}   
export default usePackages;