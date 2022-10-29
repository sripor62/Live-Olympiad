import React, { useEffect, useState } from 'react'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { ProfileLayout } from '../../designs/Dashboard/ProfileLayout'
import { usePayment } from "../../hooks/usePayment";
import { checkAuthCookie } from "../../services/helpers";
import {useStudent} from "../../hooks/useStudent"
import {useSchool} from "../../hooks/useSchool"
import { useMutation, useQuery } from 'react-query';
import { ControlPointDuplicateRounded } from '@mui/icons-material';
import { useStore } from "../../stores";
import { navigateAsPerSessionValidity } from "../../services/helpers";



const category = [
    {
        label: "F",
        value: 1
    },
    {
        label: "M",
        value: 2
    }
]

const Profile = (props) => {

    let curentUser = JSON.parse(localStorage.current_user);
    let stuName=curentUser?.state?.currentUser.fullName.split(' ')[0]
    const [subscriptionList,setSubscriptionList]=useState();

    useEffect(() => {
        navigateAsPerSessionValidity(true);
    });
    const {getUserPaymentInfo,getSubscriptions}=usePayment();
    const { dataschoolLoader: PaymentData, isLoading:PaymentLoader } = useQuery([`PaymentData`], () => getUserPaymentInfo(curentUser?.state?.currentUser?.id), { enabled: true, retry: false })
    const [paymentInfo,setPaymentInfo]=useState();
    useEffect(()=>{
        setPaymentInfo(PaymentData?.data.data)
    },[PaymentData])
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData,setPageData]=useState({
        "fullName": "",
        "email": "",
        "rollNumber": "",
        "dob": "",
        "gender": "",
        "pinCode": "",
        "school": "",
        "grade": "",
        "section": ""
    
        })
    const [pinCode,setPinCode]=useState(208017);
    const [schoolsList,setSchoolsList]=useState( []);
    const [schoolsId,setSchoolsId]=useState("")
    const {getProfile}=useStudent();
    const {getSchool}=useSchool();

    
    const { data: profileData, isLoading: contentLoader, refetch } = useQuery([`ProfileData`], () => getProfile(), { enabled: true, retry: false })
    
    const {profileDataDetails}=useStudent();
    useEffect(()=>{
        setPinCode(pageData.pinCode)
         
        setSchoolsId()
        var pdata = {
            ...profileData?.data.data,
        }

        setPageData({ ...pageData, ...pdata })
        
    },[profileData])

    
    const { data: SubscriptionData, isLoading: subscriptionsLoader } = useQuery([`SubscriptionData`], () => getSubscriptions(curentUser?.state?.currentUser?.id), { enabled: true, retry: false })
    useEffect(()=>{
        setSubscriptionList(SubscriptionData?.data.data)
    },[SubscriptionData])
    const profileSubmit = () => {
        
        var pdata = {
            ...pageData,
            fullName: pageData.fullName,
            email: pageData.email,
            rollNumber: pageData.rollNumber,
            dob: pageData.dob,
            gender: pageData.gender,
            pinCode: pageData.pinCode,
            school:pageData.school,
            grade: pageData.grade,
            section: pageData.section

        }
        afterValidate(afterValidateCallBack)
        addProfileMutate({ data: pdata })
        
    }
  
    const { mutate: addProfileMutate, isLoading: addProfileLoading } = useMutation(profileDataDetails, {
        onSuccess: (data, variables, context) => onSuccessAddAssessment(data, variables, context),
        onError: (data, variables, context) => onErrorAddAssessment(data, variables, context)
    })
    const onSuccessAddAssessment=()=> {
        refetch();
    }
    const onErrorAddAssessment=()=> {
        
    }
    const { data: schoolData, isLoading: schoolLoader, refetch:schoolFetch } = useQuery([`SchoolData`], () => getSchool(517002), { enabled: true, retry: false })

    useEffect(()=>{
        schoolFetch();  
        setSchoolsList(schoolData?.data.data) 
    
    },[pinCode])

    const selectionChangeHandler=(event)=>{
    
    setPageData({...pageData,school:event.target.value})
    

    }


    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "Profile Submitted Successfully", type: "success" })
    }
    const clearCurrentUser = useStore((state) => state.clearCurrentUser)
    return (
        <HomeLayout logOutHandler={clearCurrentUser} stuName={stuName}>
            <ProfileLayout
            subscriptionList={subscriptionList}
                category={category}
                getErrorMsz={getErrorMsz}
                submitFlag={submitFlag}
                profileSubmit={profileSubmit}
                setPageData={setPageData}
                pageData={pageData}
                snakeBarProps={snakeBarProps}
                setSnakeBarProps={setSnakeBarProps}
                setPinCode={setPinCode}
                pinCode={pinCode}
                selectionChangeHandler={selectionChangeHandler}
                schoolsList={schoolsList}
                setSchoolsList={setSchoolsList}
                paymentInfo={paymentInfo}
            />
        </HomeLayout>

    );
};

export default Profile
