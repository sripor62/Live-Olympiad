import SubscriptionLayout from "../../designs/Dashboard/Subscription";
import {useEffect} from 'react';
import { checkAuthCookie } from "../../services/helpers";
const Subscription=()=>{
    useEffect(() => {
        checkAuthCookie();
    });

    return (
        <SubscriptionLayout />
    );
}
export default Subscription