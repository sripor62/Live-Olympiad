import React, { useState ,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { afterValidate } from '../../services/commonService';
import { getErrorMsz } from '../../services/validator';
import { OnboardingLayout } from '../../designs/Onboarding/OnboardingLayout';
import { responsiveStype } from '../../beautifiers/responsive';
import { SchoolDetailLayout } from '../../designs/Onboarding/SchoolDetailLayout';
import {useQuery,useMutation} from 'react-query'
import { useStudent } from '../../hooks/useStudent';
import { useSchool } from '../../hooks/useSchool';
const SchoolDetails = () => {
    const navigate = useNavigate();
    const params=useParams();
    const userId=params.userId
    const [snakeBarProps, setSnakeBarProps] = useState({});
   
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pinCode,setPinCode]=useState(208017);
    const [schoolsList,setSchoolsList]=useState( []);
    const [pageData, setPageData] = useState({
    
        school: "",
        section: "",
        grade: "",
    });
    const {getSchool}=useSchool();
    const {getEducation,sendEducation}=useStudent();
    const submitHandler = () => {
        console.log("submittttt")
        var pdata = {
            ...pageData,
            school: pageData?.school,
            section: pageData?.section,
            grade: pageData?.grade,
        }
        console.log("pdata",pdata)
        afterValidate(afterValidateCallBack)
        addEducationMutate({ data: pdata ,userId:userId})
        console.log("grade",pageData.grade)
        navigate("/personaldetails/"+ userId + "/" +  pageData?.grade)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData);
        setSnakeBarProps({ snackbarFlag: true, msz: "School Details saved.", type: "success" })
    }
    const { data: schoolData, isLoading: schoolLoader, refetch:schoolFetch } = useQuery([`SchoolData`], () => getSchool(pinCode), { enabled: true, retry: false })

    useEffect(()=>{
        schoolFetch();  
        setSchoolsList(schoolData?.data.data) 
    
    },[pinCode])
    const { mutate: addEducationMutate} = useMutation(sendEducation, {
        onSuccess: (data, variables, context) => onSuccessAddAssessment(data, variables, context),
        onError: (data, variables, context) => onErrorAddAssessment(data, variables, context)
    })
    const onSuccessAddAssessment=()=>{}
    const onErrorAddAssessment=()=>{}
    const { data: EducationData } = useQuery([`EducationData`], () => getEducation(userId), { enabled: true, retry: false })
    useEffect(()=>{console.log("EduData",EducationData?.data?.data[0])
        setPageData(EducationData?.data?.data[0]);
    
        // if(EducationData?.data?.data.length>0){
        //         navigate("/personaldetails/"+userId)
        // }
    },[EducationData])
    
    const selectionChangeHandler=(event)=>{
    
        setPageData({...pageData,school:event.target.value})
        
    
        }
    return <OnboardingLayout stepperIndex="0">
        <SchoolDetailLayout
            responsiveStype={responsiveStype}
            pageData={pageData}
            setPageData={setPageData}
            submitFlag={submitFlag}
            getErrorMsz={getErrorMsz}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
            submitHandler={submitHandler}
            setPinCode={setPinCode}
            pinCode={pinCode}
            selectionChangeHandler={selectionChangeHandler}
            schoolsList={schoolsList}
            setSchoolsList={setSchoolsList}
        />
    </OnboardingLayout>
};

export default SchoolDetails;