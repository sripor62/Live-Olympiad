import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/api.service";
import { environment } from "../environments/environment";

const useSessionHelper = () => {


    const getReportFilter = async (id) => {
        let url = environment.sessionsUrl +`/sessions/reportsnew?userId=`+ id ;
        return await axiosInstance(false).get(url)
    }
    
    return (
        getReportFilter
    )

}
export default useSessionHelper;