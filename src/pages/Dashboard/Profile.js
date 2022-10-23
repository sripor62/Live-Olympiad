import React, { useEffect, useState } from 'react'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { ProfileLayout } from '../../designs/Dashboard/ProfileLayout'
import { checkAuthCookie } from "../../services/helpers";
import {useStudent} from "../../hooks/useStudent"
import {useSchool} from "../../hooks/useSchool"
import { useMutation, useQuery } from 'react-query';
import { ControlPointDuplicateRounded } from '@mui/icons-material';
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

const Profile = () => {
    useEffect(() => {
        checkAuthCookie();
    });
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

    return (
        <HomeLayout>
            <ProfileLayout
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
            />
        </HomeLayout>

    );
};

export default Profile
