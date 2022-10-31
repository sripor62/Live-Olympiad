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
    const { getSubjects } = usePayment();
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
    
    const [schoolsList,setSchoolsList]=useState([]);
    const [schoolsId,setSchoolsId]=useState("")
    const [subscribedSubjects,setSubscribedSubjects] = useState();
    const {getProfile}=useStudent();
    const {getSchool,getSchoolById}=useSchool();

    
    const { data: profileData, isLoading: contentLoader, refetch } = useQuery([`ProfileData`], () => getProfile(), { enabled: true, retry: false })
    
    const {profileDataDetails}=useStudent();
    useEffect(()=>{
        let pincode = (""+profileData?.data.data.schoolCode).substring(0,6);
        setPinCode(pincode)
        var pdata = {
            ...profileData?.data.data,
        }
        console.log("profileData?.data?.data?.school",profileData?.data?.data?.school)
        setSchoolsId(profileData?.data?.data?.school)
        setPageData({ ...pageData, ...pdata })
        
    },[profileData])
    const { data: schoolByIdData, isLoading: schoolIdLoader, refetch:schoolByIdFetch } = useQuery([`SchoolByIdData`], () => getSchoolById(profileData?.data?.data?.school), { enabled: true, retry: false })

    useEffect(()=>{
        setPageData({...pageData,school:schoolByIdData?.data?.data?.name,pincode:schoolByIdData?.data?.data?.pincode})
    },[schoolByIdData])

    useEffect(()=>{
        setPageData({...pageData,school:schoolByIdData?.data?.data?.name,pincode:schoolByIdData?.data?.data?.pincode})
    },[schoolByIdData])

    const [pinCode,setPinCode]=useState(pageData?.pinCode);
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
  
    const { data: SubjectData, isLoading: SubjectLoader } = useQuery(
        [`SubjectData`],
        () => getSubjects(),
        { enabled: true, retry: false }
      );

    useEffect(()=>{
        let subjectMap = {}
        SubjectData?.data?.data.forEach((subject)=>{
            subjectMap[subject.id] = subject.name;
        })
        setSubscribedSubjects(SubscriptionData?.data?.data?.subscribedCourses.map((sub)=>subjectMap[sub]))
    },[SubjectData,subscriptionList])
      
    const { mutate: addProfileMutate, isLoading: addProfileLoading } = useMutation(profileDataDetails, {
        onSuccess: (data, variables, context) => onSuccessAddAssessment(data, variables, context),
        onError: (data, variables, context) => onErrorAddAssessment(data, variables, context)
    })
    const onSuccessAddAssessment=(data, variables, context)=> {
      setSchoolsId()
    }
    const onErrorAddAssessment=()=> {
        
    }
    const { data: schoolData, isLoading: schoolLoader, refetch:schoolFetch } = useQuery([`SchoolData`], () => getSchool(pinCode), { enabled: true, retry: false })

    useEffect(()=>{
        schoolFetch();
    },[pinCode])

    useEffect(() => {
        setSchoolsList(schoolData?.data.data) 
    }, [schoolData])

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
            subscriptionList={subscribedSubjects}
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
