
import { Endpoints } from "../environments/endpoints";
import { environment } from "../environments/environment";

import axiosInstance from "../services/api.service";

export const studentInfoObj = (schoolId,page,countPerPage,grade) => {
    let obj =  {
        role: "STUDENT",
        sortBy: "CREATEDAT",
        sortOrder: "DESC",
        incDeleted: true,
    }
    if(schoolId){
        obj.schoolId = schoolId
    }
    if(grade){
        obj.grade = grade
    }
    return obj;
}
export const convertDatainString = (data) => {
    console.log('data', data)
    var dataString = '?';
    for (const key in data) {
        dataString += `${key}=${data[key]}&`
    }
    return dataString
}

export const useStudent = () => {
    
    const profileDataDetails = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.ADD_PROFILE ;
        return await axiosInstance().post(endpoint, (body.data));
    };

    const getProfile = async () => {
        const endpoint = environment.userBaseUrl + Endpoints.ADD_PROFILE ;
        return await axiosInstance().get(endpoint);
    };
    const sendEducation = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.ADD_EDUCATiON +"/" + body.userId;
        return await axiosInstance().post(endpoint, (body.data));
    };

    const getEducation = async (userId) => {
        const endpoint = environment.userBaseUrl + Endpoints.GET_EDUCATION + "/" + userId + Endpoints.GET_EDUCATION_END;
        return await axiosInstance().get(endpoint);
    };
    const getPersonalData = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.GET_PERSONAL_INFO;
        return await axiosInstance().get(endpoint);
    };
    const sendPersonalData = async (body) => {
        const endpoint = environment.userBaseUrl + "/admin" + Endpoints.GET_PERSONAL_INFO + "/" + body.userId;
        return await axiosInstance().post(endpoint, (body.data));
    };
    const getPackage = async (packageId) => {
        let url = environment.contentUrl + `/packages/${packageId}`;
        return await axiosInstance(false).get(url)
    }
    const getReports = async ({schoolId,grade,subject, meta}) => {
        let url = environment.sessionsUrl + `sessions/reports?school=${schoolId}`;
        if(grade){
            url+=`&grade=${grade}`
        }
        if(subject){
            url+=`&subject=${subject}`
        }
        if(meta===false){
            url+=`&meta=false`
        }
        return await axiosInstance(false).get(url)
    }
    const getUsersGrade = async (body) => {
        const endpoint = environment.userBaseUrl + Endpoints.ADMIN + 'all' + convertDatainString({ ...body });
        return await axiosInstance(false).get(endpoint);
    };
     
    return {
        profileDataDetails,
        getProfile,
        getEducation,
        sendEducation,
        getPersonalData,
        sendPersonalData,
        getPackage,
        getReports,
        getUsersGrade,
       
    }
};