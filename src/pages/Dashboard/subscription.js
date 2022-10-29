import SubscriptionLayout from "../../designs/Dashboard/Subscription";
import React, { useState } from "react";
import { useEffect } from "react";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import { usePayment } from "../../hooks/usePayment";
import { useQuery } from "react-query";
import { useStore } from "../../stores";
const Subscription = () => {
  const user = useStore((state) => state.currentUser);

  const [paymentInfo, setPaymentInfo] = useState();
  const [subscriptionList, setSubscriptionList] = useState();
  const [subjectList, setSubjectList] = useState();
  const [subjectMode, setSubjectMode] = useState();
  const [subjects, setSubjects] = useState([]);


  const {
    getUserPaymentInfo,
    getSubscriptions,
    getPaymentKey,
    createOrder,
    getSubjects,
  } = usePayment();

  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });

  const handleModeChange = (mode) => {
    if (mode != subjectMode) {
      setSubjectMode(mode);
      if (mode == 3) {
        setSubjects(subjectList.map((subject) => subject.id))
      } else {
        setSubjects([])
      }

    }
  }

  const handleSubjectSelect = (subjectId) => {
    if(subscriptionList?.subscribedCourses.includes(subjectId)){
      return;
    }
    if (subjects.includes(subjectId)) {
      setSubjects(subjects.filter((subject) => subject !== subjectId));
    } else {
      if (subjectMode == 1) {
        setSubjects([subjectId])
      } else if (subjectMode == 2) {
        if (subjects.length < 2) {
          setSubjects([...subjects, subjectId])
        }
      }
    }
  }

  function loadRazorpay() {
    if (
      !((subjectMode == 3 && subjects.length == 3) ||
        (subjectMode == 2 && subjects.length == 2) ||
        (subjectMode == 1 && subjects.length == 1))) {
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        let order = subjects.length * 300 - (subjects.length - 1) * 50;
        const result = await createOrder({
          amount: order * 100,
          courseIds: subjects.map((crs) => crs.id),
        });
        const { amount, orderId, currency } = result.data.data;
        const { data } = await getPaymentKey();
        const options = {
          key: data.data,
          amount: amount.toString(),
          currency: currency,
          name: "LiveOlympiad",
          description: "LiveOlympiad Transaction",
          order_id: orderId,
          handler: async function (response) {
            console.log(response.razorpay_payment_id);
            console.log(response.razorpay_order_id);
          },
          prefill: {
            email: user.email,
            contact: user.phoneNum,
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#03b2cb",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
      }
    };
    document.body.appendChild(script);
  }

  const { data: PaymentData, isLoading: PaymentLoader } = useQuery(
    [`PaymentData`],
    () => getUserPaymentInfo(user?.id),
    { enabled: true, retry: false }
  );
  const { data: SubjectData, isLoading: SubjectLoader } = useQuery(
    [`SubjectData`],
    () => getSubjects(),
    { enabled: true, retry: false }
  );
  const { data: SubscriptionData, isLoading: subscriptionsLoader } = useQuery(
    [`SubscriptionData`],
    () => getSubscriptions(user?.id),
    { enabled: true, retry: false }
  );

  useEffect(() => {
    console.log(PaymentData?.data?.data);
    setPaymentInfo(PaymentData?.data?.data.filter((item) => item.status !== "created"));
  }, [PaymentData]);

  useEffect(() => {
    setSubscriptionList(SubscriptionData?.data?.data);
  }, [SubscriptionData]);

  useEffect(() => {
    setSubjectList(SubjectData?.data?.data);
  }, [SubjectData]);

  return (
    <SubscriptionLayout
      paymentInfo={paymentInfo}
      subscriptionList={subscriptionList}
      loadRazorpay={loadRazorpay}
      subjectList={subjectList}
      handleModeChange={handleModeChange}
      subjectMode={subjectMode}
      subjects={subjects}
      handleSubjectSelect={handleSubjectSelect}
    />
  );
};
export default Subscription;
