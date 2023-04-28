import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/api.service";
import { environment } from "../environments/environment";

const useSessionHelper = () => {


    const getReportFilter = async (id) => {
        let url = environment.sessionsUrl +`/sessions/reportsnew?userId=`+ id ;
        return await axiosInstance(false).get(url)
    }
    const StudentsReport = async (packageId)=>{
        let url = `https://522rowf3da.execute-api.ap-south-1.amazonaws.com/live/reports/${packageId}/result`;
        return await axiosInstance(false).get(url)
    }

    
    return {
        getReportFilter,
        StudentsReport
    } 
    

}
export default useSessionHelper;