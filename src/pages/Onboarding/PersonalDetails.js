import React, { useState, useEffect } from 'react'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import { responsiveStype } from '../../beautifiers/responsive';
import { OnboardingLayout } from '../../designs/Onboarding/OnboardingLayout';
import { PersonalDetailLayout } from '../../designs/Onboarding/PersonalDetailLayout'
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { useStudent } from '../../hooks/useStudent';
export default function PersonalDetails() {
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({
        fullName: "", 
        email: "",
        rollNumber: "",
        dob: "",
        gender: "" });
    const navigate = useNavigate();
    const params = useParams();
    var userId = params.userId
    const grade=params.grade
    const { getPersonalData, sendPersonalData } = useStudent();
    const { data: personalData, isLoading: contentLoader, refetch } = useQuery([`PersonalData`], () => getPersonalData(userId), { enabled: true, retry: false })
    useEffect(() => {
        if (personalData) {
            console.log("personalData",personalData?.data?.data)
            if(personalData?.data.data.id!==null){
                navigate("/dashboard")
            }
            var pdata = {
                ...personalData?.data.data,
            }
            setPageData({ ...pageData, ...pdata })
        }
    }, [personalData]);



    const submitHandler = async () => {
        

        var pdata = {
            ...pageData,
            fullName: pageData.fullName,
            email: pageData.email,
            rollNumber: pageData.rollNumber,
            dob: pageData.dob,
            gender: pageData.gender

        }
        console.log("pDataaa",pdata)
        if(pdata.fullName!="" && pdata.rollNumber!=undefined && pdata.rollNumber!=""){
            console.log("pdata.fullName",pdata.fullName)
        PersonalMutate({ data: pdata, userId: userId })
        navigate("/subscription/")}
    };
    const { mutate: PersonalMutate, isLoading: PersonalInfoLoading } = useMutation(sendPersonalData)


    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" })
    }

    return <OnboardingLayout stepperIndex="1">
        <PersonalDetailLayout
            responsiveStype={responsiveStype}
            pageData={pageData}
            setPageData={setPageData}
            submitFlag={submitFlag}
            getErrorMsz={getErrorMsz}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
            submitHandler={submitHandler}
        />
    </OnboardingLayout>
}
