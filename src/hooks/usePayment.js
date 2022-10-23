
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";



export const usePayment = () => {
    
    

    const getUserPaymentInfo = async (body) => {
        const endpoint = environment.paymentUrl + Endpoints.PAYMENT_INFO + "/" + body ;
        return await axiosInstance().get(endpoint);
    };

 const getSubscriptions = async (body) => {
        const endpoint = environment.paymentUrl + Endpoints.SUBSCRIPTION_INFO + "/:" + body ;
        return await axiosInstance().get(endpoint);
    };
    return {
    
        getUserPaymentInfo,
        getSubscriptions,
    }
};