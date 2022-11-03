export class Endpoints {
  static TESTS="/tests"
  static CAPTURE = "/capture" 
  static PACKAGES="/packages/tags?searchType=any&mock=true"
  static ADD_PROFILE="/profile";
  static LOGIN_USER = "/auth/login";
  static LOGOUT_USER = "/auth/logout";
  static TRIGGER_RESET_PASSWORD = "/auth/forgotpassword";
  static RESET_PASSWORD = "/auth/resetpassword";
  static GENERATE_OTP = "/auth/sendOTP";
  static VALIDATE_OTP = "/auth/verifyOTP";
  static UPLOAD_FILE = "/file/upload";
  static SCHOOL_PINCODE="/school/pincode"
  static PAYMENT_INFO="/payments";
  static SUBSCRIPTION_INFO="/subscriptions";
  static ORDER = "/order";
  static PAYMENT_KEY = "/paymentkey"
  static COURSES = "/courses";
  static PACKAGE_LIST="/tests/all";
  static ADD_EDUCATiON="/admin/education-info"
  static GET_EDUCATION="/admin";
  static GET_EDUCATION_END="/education-info"
  static GET_PERSONAL_INFO="/admin/personal-info"
  static SCHOOL="/school"
}