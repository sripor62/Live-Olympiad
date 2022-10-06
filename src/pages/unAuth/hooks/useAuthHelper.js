import { useNavigate } from "react-router-dom";
import { Endpoints } from "../constants/endpoints";
import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";

const useAuthHelper = () => {

    const generateOTP = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.GENERATE_OTP;
        return await axiosInstance({secure:false}).post(endpoint, body);
      };
return {
generateOTP,
}; 
};

export default useAuthHelper;