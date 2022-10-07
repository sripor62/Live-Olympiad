import { useNavigate } from "react-router-dom";
// import { Endpoints } from "../../../constants/endpoints";
// import { environment } from "../environments/environments";
import axiosInstance from "../services/api.service";

const useAuthHelper = () => {
    const environment={ userBaseUrl: "https://users.aimlearn.co",}

    const GENERATE_OTP = "/auth/sendOTP";
const VALIDATE_OTP="/auth/verifyOTP";
const SET_PASS="/auth/resetpassword";
const LOGIN_USER="/auth/login";
    const generateOTP = async (body) => {
        const endpoint = environment.userBaseUrl + GENERATE_OTP;
        return await axiosInstance({secure:false}).post(endpoint, body);
      };

      const validateOTP = async (body) => {
        const endpoint = environment.userBaseUrl + VALIDATE_OTP;
        return axiosInstance({secure:false}).post(endpoint, body);
      };

      const setPassword=async(newPassword,userToken) => {
const endpoint=environment.userBaseUrl + SET_PASS;
return await axiosInstance().post(
    endpoint,
    { newPassword },
    { headers: { Authorization: "Bearer " + userToken } }
  );
      };

      const loginUser = async (body) => {
        const endpoint = environment.userBaseUrl +LOGIN_USER;
        return await axiosInstance({secure:false}).post(endpoint, body);
      };
    

return {
generateOTP,
validateOTP,
loginUser,
setPassword

}; 
};

export default useAuthHelper;