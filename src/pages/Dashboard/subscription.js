import SubscriptionLayout from "../../designs/Dashboard/Subscription";
import React, {useState} from 'react';
import {useEffect} from 'react';
import { navigateAsPerSessionValidity } from "../../services/helpers";
import { usePayment } from "../../hooks/usePayment";
import { useQuery } from 'react-query';
const Subscription=()=>{
    useEffect(() => {
        navigateAsPerSessionValidity(true);
    });
    
    let curentUser = JSON.parse(localStorage.current_user);
    const {getUserPaymentInfo,getSubscriptions}=usePayment();
    const [paymentInfo,setPaymentInfo]=useState();
    const { dataschoolLoader: PaymentData, isLoading:PaymentLoader } = useQuery([`PaymentData`], () => getUserPaymentInfo(curentUser?.state?.currentUser?.id), { enabled: true, retry: false })
    
    useEffect(()=>{
        setPaymentInfo(PaymentData?.data.data)
    },[PaymentData])

    const [subscriptionList,setSubscriptionList]=useState();
    const { data: SubscriptionData, isLoading: subscriptionsLoader } = useQuery([`SubscriptionData`], () => getSubscriptions(curentUser?.state?.currentUser?.id), { enabled: true, retry: false })
    useEffect(()=>{
        setSubscriptionList(SubscriptionData?.data.data)
    },[SubscriptionData])

    return (
        <SubscriptionLayout 
        paymentInfo={paymentInfo}
        subscriptionList={subscriptionList}
        />
    );
}
export default Subscription