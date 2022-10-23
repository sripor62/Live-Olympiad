import SubscriptionLayout from "../../designs/Dashboard/Subscription";
import {useEffect} from 'react';
import { navigateAsPerSessionValidity } from "../../services/helpers";
const Subscription=()=>{
    useEffect(() => {
        navigateAsPerSessionValidity(true);
    });

    return (
        <SubscriptionLayout />
    );
}
export default Subscription