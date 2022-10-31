import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";
import axiosInstance from "../services/api.service";

export const usePayment = () => {
    const getUserPaymentInfo = async (body) => {
        const endpoint = environment.paymentUrl + Endpoints.PAYMENT_INFO + "/" + body ;
        return await axiosInstance().get(endpoint);
    };

    const getSubjects = async (body) => {
        const endpoint = environment.paymentUrl + Endpoints.COURSES;
        return await axiosInstance().get(endpoint);
    };
    const getSubscriptions = async (body) => {
        const endpoint = environment.paymentUrl + Endpoints.SUBSCRIPTION_INFO + "/" + body ;
        return await axiosInstance().get(endpoint);
    };

    const payOrder = async (body) => {
        const endpoint = environment.paymentUrl + Endpoints.CAPTURE;
        return await axiosInstance().post(endpoint,body);
    };

    const getPaymentKey = async (body) => {
        const endpoint = environment.paymentUrl + Endpoints.PAYMENT_KEY;
        return await axiosInstance().get(endpoint);
    };   

    const createOrder = async (body) => {
        const endpoint = environment.paymentUrl + Endpoints.ORDER;
        return await axiosInstance().post(endpoint,body);
    };
    return {
        getSubjects,
        createOrder,
        getPaymentKey,
        getUserPaymentInfo,
        getSubscriptions,
        payOrder
    }
};