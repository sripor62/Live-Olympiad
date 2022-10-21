
export class TemplateConstants {


    public static COMMON_TEXTS = {
        REQUIRED: 'This field is required',
        VALID_EMAIL: 'Please enter a valid login name or email id',
        NAME_REQUIRED: ' Please enter your name',
        MIN_REQUIRED: 'Minimum 8 characters required',
        PASSWORD_LIMIT: 'Please use between 8 to 64 characters',
        EMAIL_LIMIT: 'Please use between 6 to 64 characters',
        NAME_LIMIT: 'Please use between 4 to 64 characters',
        MAX_REQUIRED: 'Please use below 64 characters ',
        VALID_DETAILS: 'Please enter a valid email and password',
        API_ERROR_MESSAGE: 'Something went wrong. Please try again.',
        SESSION_EXPIRED: 'Your session has expired. Please login once again.',
        ALERT: 'Alert',
        READ_MORE: 'Read More',
        ERROR: 'Error',
        TOKEN_INVALID: 'Token Invalid',
        SITE_DESCRIPTION: '"The Next Genome of Learning" A complete platform for all your learning needs. Start today by signing up on the platform and join any community of your interest to learn something new everyday',
        NO_ACCESS_COMMUNITY:'You dont have permission to access this community',
        LOGIN_NAME_REQUIRED: ' Please enter your login name',
        LOGIN_NAME_LIMIT: 'Please use between 6 to 16 characters',
        LOGIN_NAME_ALREADY_EXIST: 'This login name is already in use, please enter a new login name',
        LOGIN_NAME_AVAILABLE : 'Login name available',
        LOGIN_PATTERN_MATCH_ERROR: 'Login name is invalid, Special characters except . _ and - are not allowed, and must start and end with alpha-numeric. Length should be between 4-16 characters',
        VALID_EMAIL_MOBILE: 'Please enter a valid email id or mobile',
    };

    public static USER_ONBOARD_CREATE_ACCOUNT = {
        TITLE: 'Create Account',
        SUB_TITLE: 'Welcome to HubbleHox, The next genome of learning',
        SUCCESS_MESSAGE: 'You have joined community "@communityName" successfully. Start Exploring!',
        SUCCESS_TITLE: 'Welcome',
        FAILURE_MESSAGE: 'An error has occured, Please check your input values',
        FAILURE_TITLE: 'Oops',
        JOINED_WITH_DIFF_CREDENTAILS: 'Credentials you have provided is not valid for current invite. Please login using the email address to which invite was recieved.',
        JOIN_FAILED: 'There was some error while joining this community. Please try again or contact community admin.'
    };

    public static LANDING_PAGE = {
        SUB_TITLE: 'At HubbleHox each and every day, you will learn new things and you will add new skills. HubbleHox brings a platform where you could join communities of your interest, read and learn new topics via courses available within communities. HubbleHox is not all about one way learning but learning by sharing your knowledge. Create your own community and start creating your own contents for other learners to learn from the platform'
    };

    public static LOGIN = {
        CAPTION: 'The next genome of learning, from Ampersand',
        ACCOUNT: 'Don\'t have an Account?',
        INVALID_CREDENTIALS: 'Please enter a valid email and password',
        FORGET_PASSWORD: 'Forgot Password?',
        LOGIN_PROBLEM:'Having problem logging in?',
        INVALID_USER:'User does not exist',
        BLOCKED_USER : 'You are no longer a member of  Hubbblehox or had been blocked by the administrator. Please contact Hubblehox administrator to resolve the problem.',
        ALREADY_LOGGED_IN_USER : 'Your last login session is still active in a @deviceId@ device. Do you want to auto-logout there and continue using Hubblehox here?'
    };

    public static WELCOME_SCREEN = {
        WELCOME: ' Welcome to the community!',
        DESCRIPTION: 'You have received an invite to join your first community at HubbleHox. The first thing to start with learning is to create an account, so that we could find contents and communities that best suits your interest. Please finish next steps and start learning from today',
        DESCRIPTION_NOT_FIRST_COMMUNITY: 'You have received an invite to join this community at HubbleHox. Please click join button and start learning from today',
        CANCEL_POPUP_TITLE: 'Are you sure to cancel joining this community?',
        CANCEL_POPUP_MESSAGE: 'Invitation will be cancelled upon confirmation'
    };

    public static MOBILE_VERIFICATION = {
        VERIFY_MOBILE: 'Please verify your mobile number',
        DESCRIPTION: 'Never miss an update from HubbleHox, get it directly to your mobile number',
        ENTER_OTP: 'Please enter the code you have received in the given number',
        RESEND_OTP: 'Resend OTP in 20 Seconds'
    };

    public static USER_REGISTRATION = {
        REG_SUCCESS_MESSAGE: 'User has been registered successfully',
        REG_SUCCESS_TITLE: 'Registration Successful',
        REG_FAILED_GENERIC: 'Registration failed',
        ERROR_AGREE_TOC: 'Please agree to our Terms & Conditions',
        OTP_SUBMISSION_ERROR: 'Invalid OTP',
        OTP_SCREEN_TITLE: 'We\'ve sent you an OTP to your email id ',
        ALREADY_HAVE_ACCOUNT: 'I already have an account',
        PASSWORD_MISMATCH_MESSAGE: 'Password and Confirm Password does not match',
        RESEND_OTP: 'Resend OTP in',
        USER_EXISTS: 'Email ID already exists.',
        SIGNUP_SUBTITLE_TEXT: ''
    };

    public static RESET_PASSWORD = {
        MODAL_TITLE: 'Reset Your Password',
        MODAL_MESSAGE: 'Please enter your new password',
        RESET_SUCCESS_MESSAGE: 'Your password has been reset successfully',
        RESET_SUCCESS_MODAL_TITLE: 'Reset password',
        RESET_FAILED: 'We could not update your password. Please try again.',
        PASSWORD_MISMATCH_MESSAGE: 'Passwords do not match',
        TOKEN_VERIFICATION_ERROR: 'We couldnt validate token. Please try again.',
        BUTTON_LABEL: 'Reset Password'
    };

    public static FORGOT_PASSWORD = {
        MODAL_TITLE: 'Reset Password',
        MODAL_MESSAGE: 'Please enter your registered email id / Mobile Number. We will send you a password reset link',
        RESET_SUCCESS_MESSAGE: 'Password reset link has been sent to your registered email id',
        RESET_SUCCESS_MESSAGE_EMAIL_MOBILE: 'Password reset link has been sent to your registered email id / mobile.',
        RESET_SUCCESS_MODAL_TITLE: 'Reset Password',
        RESET_FAILED: ' Password reset failed',
        INVALID_USER: 'User doesn\'t exist!'
    };

    public static UPDATE_USER_DETAILS = {
        NAME_EMPTY_FIELD_MESSAGE: 'Please enter your name',
        NO_UPDATE_MESSAGE: 'There are no changes',
        API_ERROR_MESSAGE: 'Couldn\'t update user details',
        CHARACTER_LIMIT: 'Please use between 4 to 64 characters'
    };

    public static SEARCH_RESULTS_API_ERROR = {
        API_ERROR: 'ERROR',
        API_ERROR_MESSAGE: 'Oops, Your request cannot be processed.',
        JOIN_COMMUNITY_API_ERROR: 'Your request to join community failed'
    };

    public static DASHBOARD = {
        WELCOME: 'Let\'s learn something new today.',
        JOIN_COMMUNITY_TO_ACCESS_COURSE: 'Please join community @communityname to access this course',
        COMMUNITY_JOIN_CONFIRM: 'Are you sure you want to join this community?'
    };
    public static USER_ONBOARDING_FLOW = {
        INVALID_INVITE_TITLE: 'Invalid Invite',
        INVALID_INVITE_WRONG_USER_MESSAGE: 'This invite is not valid for currently logged in user',
        INVALID_INVITE_TOKEN_INVALID: 'Your invitation link has expired or is not valid anymore. Please contact the community admin to send a new invite',
        INVALID_INVITE_URL: 'This invitation link is not valid'
    };

    public static EXIT_COMMUNITY = {
        API_ERROR: 'Error',
        API_FAIL_MESSAGE: 'We couldn\'t exit the community. Please try again',
        CANNOT_EXIT_COMMUNITY: 'You cannot exit this community',
        EXIT_SUCCESS_TITLE: 'Exit Community',
        EXIT_SUCCESS_MESSAGE: 'You have exited community "@communityname" successfully',
        EXIT_CONFIRMATION_MESSAGE: 'Are you sure you want to exit from the community "@communityname"?'
    };

    public static SWITCH_COMMUNITY = {
        API_ERROR: 'Error',
        API_FAIL_MESSAGE: 'We couldn\'t switch the community. Please try again',
        CANNOT_EXIT_COMMUNITY: 'You cannot exit this community',
        SWITCH_SUCCESS_TITLE: 'Success',
        SWITCH_SUCCESS_MESSAGE: 'You have switched to community "@communityname"',
        SWITCH_CONFIRMATION_MESSAGE: 'Are you sure you want to switch to community "@communityname"?',
        JOINED_STATUS: 'JOINED'
    };

    public static CHANGE_PASSWORD = {
        ERROR: 'We couldn\'t update you password',
        PASSWORD_CHANGE_MESSAGE: 'Password updated successfully',
        PASSWORD_CHANGE_MODAL_TITLE: 'Change Password',
        OLD_AND_NEW_PASSWORD_SAME_ERROR_MESSAGE: 'New and old password can\'t be the same',
        EMPTY_PASSWORD_ERROR_MESSAGE: 'This field is required',
        PASSWORD_LIMIT: 'Please use between 8 to 64 characters',
        PASSWORD_MISMATCH_MESSAGE: 'Passwords do not match',
        PASSWAORD_CHANGE_WARNING_MESSAGE : 'Password updated successfully. You have been logged out of all devices. Please re-login again'
    };

    public static NO_DATA_MESSAGE = {
        NO_COURSES_MESSAGE: 'No courses available',
        NO_COMMUNITY_MESSAGE: 'No communities available',
    };

    public static COMMUNITY_LIST_MODAL = {
        JOIN_MESSAGE: 'This course is available in the following communities. Start the course from any existing community or join any one of them to start learning today itself.',
        SINGLE_COMMUNITY_JOIN_MESSAGE: 'Join the community to start learning today itself.',
        SINGLE_COMMUNITY_WATCH_MESSAGE: 'Learn this course from following community.',
        NO_COMMUNITY_JOIN_MESSAGE: 'No communities available.',
        COMMUNITY_JOIN_ERROR_MESSAGE: 'You are no longer a member of the community or had been blocked by the administrator. Please contact Hubblehox administrator to resolve the problem.'
    };

    public static SUCCESS_REDIRECTION_MODAL = {
        JOIN_SUCCESS_MESSAGE: 'Switching to the community\n "@communityname"',
        WATCH_COURSE: 'You can now watch the course from\n "@communityname"',
        REDIRECTING_MESSAGE: 'Redirecting now towards the course page'
    };

    public static COURSE_OVERVIEW = {
        NO_COURSE_MESSAGE: 'No Courses available'
    };

    public static COURSE_LISTING = {
        NO_COURSE_MESSAGE: 'No Courses available'
    };

    public static GET_COURSE = {
        FETCH_ERROR: 'Error',
        COURSE_FETCH_ERROR: ' Unable to fetch Courses, reverting to previous page',
        COURSE_LISTING_MESSAGE: 'Showing @pageStart-@pageEnd of @totalCourses Courses'
    };
    public static COURSE_RESUME = {
        SUCCESS: 'Congrats',
        MODULE_COMPLETED: 'You have successfully completed current module',
        COURSE_COMPLETED: 'You have completed this course successfully. Explore more courses in Hubblhox platform.',
        COURSE_COMPLETED_WITH_CERTIFICATE: 'You have completed this course successfully. Get your certificate',
        BACK_TO_COMMUNITY: 'Back to Community',
        BACK_TO_DASHBOARD: 'Back to Dashboard',
        PENDING_MODULES : 'You have pending items in'
    };
    public static ASSESMENTS = {
        REQUIRED_MARKS: 'At least $value mark(s) required to pass the assessment',
        REQUIRED_ANSWERS: 'At least $value correct answer(s) required to pass assessment.',
        REQUIRED_PERCENTAGE_ANSWERS: 'At least $value % of correct answers required to pass the assessment',
        REQUIRED_PERCENTAGE_MARKS: 'Must secure $value % of marks to pass the assessment',
        SUCCESS: 'You have Successfully passed the Module',
        FAILED: 'Seems like you need a Re-Test',
        COMPLETED_SUCCESSFULLY: 'You have successfully completed the assessment'
    }

    public static USER_PROFILE = {
        USER_PROFILE_CANNOT_RETRIEVE: 'Couldnot retrieve user profile.',
    }

    public static RAIL_MANAGEMENT = {
        RAIL_ERROR_MESSAGE: 'Inavalid Request',
        RAIL_SUCCESS_MESSAGE: 'Valid Request'
    }

    public static COMMUNITY_SWITCH_MODAL = {
        PLATFORM_COURSE: 'This is a public course. Are you sure to proceed to this course?'
    }

    public static PDF_ERROR = {
        ERROR : 'An error occured while loading the pdf'
    }
}
