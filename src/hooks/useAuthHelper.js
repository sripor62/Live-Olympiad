import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/api.service";
import { environment } from "../environments/environment";

const useAuthHelper = () => {
  const navigate = useNavigate();

  const Endpoints={VALIDATE_OTP:"/auth/verifyOTP",
                  GENERATE_OTP : "/auth/sendOTP",
                  RESET_PASSWORD:"/auth/resetpassword",
                  LOGIN_USER:"/auth/login"}
           
  const setPassword = async (newPassword, userToken) => {
    const endpoint = environment.userBaseUrl + Endpoints.RESET_PASSWORD;
    return await axiosInstance().post(
      endpoint,
      { newPassword },
      { headers: { Authorization: "Bearer " + userToken } }
    );
  };
  const generateOTP = async (body) => {
    
    const endpoint = environment.userBaseUrl + Endpoints.GENERATE_OTP;
  
    return await axiosInstance({secure:false}).post(endpoint, body);
  };

  const validateOTP = async (body) => {
    const endpoint = environment.userBaseUrl + Endpoints.VALIDATE_OTP;
    return axiosInstance({secure:false}).post(endpoint, body);
  };

  // const register = async (body) => {
  //   const endpoint = environment.userBaseUrl + Endpoints.REGISTER_USER;
  //   return await axiosInstance({secure:false}).post(endpoint, body);
  // };

  const login = async (body) => {
    const endpoint = environment.userBaseUrl + Endpoints.LOGIN_USER;
    return await axiosInstance({secure:false}).post(endpoint, body);
  };

  // const triggerPasswordReset = async (body) => {
  //   const endpoint = environment.userBaseUrl + Endpoints.TRIGGER_RESET_PASSWORD;
  //   return await axiosInstance({secure:false}).post(endpoint, body);
  // };

  // const socialLogin = async (body) => {
  //   const endpoint = environment.userBaseUrl + Endpoints.SOCIAL_AUTH;
  //   return await axiosInstance(navigate).post(endpoint, body);
  // }

  return {
    generateOTP,
    validateOTP,
    setPassword,
    login
   
  };
};

export default useAuthHelper;
