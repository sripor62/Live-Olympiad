import { Role } from './roles';

export class User {
    phoneNumber: string;
    id: string;
    access_token: string;
    fullName: string;
    roles?: Role[];
    token: string;
    communityList?: any;
    selectedCommunity?: any;
    prevCommunity?: any;
    profileImageurl?: string;
    groupSubject?: string;
    schoolClass?: string;
    board?: string;
    privateCommunityId?: string;
    isPrivateUser?: boolean;
    schoolId?: string;
    elcc_selectedValue?: {
        day?: string,
        teacherId?: string,
        class?: string,
        schoolId?: string,
        theme?: string
    };
    activityList?: any;
    initializeStep?: number;
    email?:string
    percentProfile: number;
    userRole: string;
    grade: string
}
