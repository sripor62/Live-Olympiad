import { Role } from './roles';

export class User {
    id: string;
    access_token: string;
    firstName: string;
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
