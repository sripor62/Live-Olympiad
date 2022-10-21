export class Endpoints {
  static ADD_PROFILE="/profile";
  static GET_COURSES = "/course";
  static GET_SEARCH_RESULTS = "/search";
  static USER = "/user/admin";
  static INVITE = "/invite";
  static GET_USER_DETAILS = "/user/admin/personal-info";
  static ROLE = "/user/role"
  static LOGIN_USER = "/auth/login";
  static LOGOUT_USER = "/auth/logout";
  static GET_COMMUNITY = "/community";
  static EXIT_COMMUNITY = "/user/community";
  static TRIGGER_RESET_PASSWORD = "/auth/forgotpassword";
  static RESET_PASSWORD = "/auth/resetpassword";
  static GET_MODULES = "/module";
  static REGISTER_USER = "/auth/register";
  static ACTIVATE_USER = "/auth/register";
  static VALIDATE_TOKEN = "/auth/register";
  static UPDATE_PASSWORD = "/auth/register";
  static GET_CONTENT = "/admin/content";
  // static GENERATE_OTP = "/auth/login/otp/initiate";
  static GENERATE_OTP = "/auth/sendOTP";
  static GENERATE_UPDATE_OTP = "/sendOTP";
  // static VALIDATE_OTP = "/user/validateemail";
  static VALIDATE_OTP = "/auth/verifyOTP";
  static VALIDATE_UPDATE_OTP = "/verifyOTP";
  static UPLOAD_FILE = "/file/upload";
  static HEARTBEAT = "/actions";
  static COMMUNITY_SEARCH = "/community/search";
  static GET_SUGGESTIONS = "/suggestion";
  static GET_ASSESSMENTS = "/admin/assessment";
  static UPLOAD_PROFILE_PIC = "/user/@userId@/upload/profilepic";
  static GET_CERTIFICATES = "/admin/certification";
  static VERIFY_TOKEN = "/user/verifytoken";
  static UPDATE_COMMUNITY_SELECTION = "/user/community/active/@communityId@";
  static CHECKOUT = "/checkout";
  static ORDER = "/order";
  static IMPORT_FILE = "/admin/import";
  static CAPTURE_PAYMENT = "/capture";
  static S3_TO_EXCLUDE = "s3.ap-south-1.amazonaws";
  static RAIL_CONFIG = "/user/configuration/rail";
  static USER_NAME_EXIST = "/user/usernameExist/@username@";
  static AUTH_EXCLUDED_URLS = [
    Endpoints.LOGIN_USER,
    Endpoints.REGISTER_USER,
    Endpoints.ACTIVATE_USER,
    Endpoints.TRIGGER_RESET_PASSWORD,
    Endpoints.VALIDATE_OTP,
    Endpoints.VALIDATE_TOKEN,
    Endpoints.S3_TO_EXCLUDE,
    Endpoints.LOGOUT_USER,
  ];
  static _401_EXCLUDE_URLS = [
    Endpoints.UPDATE_PASSWORD,
    Endpoints.LOGIN_USER,
    Endpoints.TRIGGER_RESET_PASSWORD,
    Endpoints.RESET_PASSWORD,
    Endpoints.REGISTER_USER,
    Endpoints.VALIDATE_TOKEN,
    Endpoints.VALIDATE_OTP,
    Endpoints.VERIFY_TOKEN,
    Endpoints.LOGOUT_USER,
  ];
  static SOCIAL_AUTH = "/auth/social";

  static USER_INFO = "/";
  static PERSONAL_INFO = "/personal-info";
  static WORK_EXPERIENCE = "/work-experience";
  static EDUCATION_INFO = "/education-info";

  static ALL_COURSES = "/course";
}
