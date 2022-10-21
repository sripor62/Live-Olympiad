import { Role } from "../models/roles";

/***
 * @description Contains App level constants.
 */
export class AppConstants {
  public static TOKEN_TYPE = "Bearer";
  public static DOMAIN = ".hubblehox.com";

  /***
   * session storage constants
   */
  public static SESSION_STORAGE_ITEMS = {
    USER_INFO: "LP_UI_V0",
    COMMUNITY_INFO: "LP_CI_V0",
  };

  /***
   * local storage constants
   */
  public static LOCALSTORAGE_ITEMS = {
    RAIL_INFO: "RL_INF_V0",
  };

  /***
   * Http headers
   */
  public static HTTP_HEADERS = {
    AUTHORIZATION: "x-auth-token",
  };

  /***
   * Http response status codes
   */
  public static HTTP_RESPONSE_STATUS = {
    BAD_REQEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    TIMED_OUT: 408,
    NO_RESPONSE: 0,
    ALREADY_LOGGED_IN: 409,
  };

  /***
   * Http error response messages
   */
  public static HTTP_RESPONSE_MESSAGES = {
    NOT_FOUND: "Not found",
    INTERNAL_SERVER_ERROR: "Something went wrong!!",
    TIMED_OUT: "Timed Out",
    NO_RESPONSE: "No response",
  };

  /***
   * USER ROLE
   */
  public static USER_ROLE = {
    STUDENT: 1,
    
  };

  /***
   * PAGINATION - PAGE SIZE
   */
  public static PAGINATION_SETTINGS = {
    PAGE_NUMBER: 0,
    PAGE_LIST_NUMBER: 1,
    PAGE_SIZE: 20,
    DATATABLE_PAGE_LENGTH: 20,
  };

  /**
   * OTHER CONFIGURATIONS
   */

  public static CONFIG = {
    SEARCH_DELAY: 800, // delay search item as user type the text by 800ms,
    CUSTOM_FIELD_LIMIT: 50, // custom field add limit
  };

  public static TOOLTIP_MESSAGES = {
    COPY: "Make a copy",
    EDIT: "Edit",
    DELETE: "Delete",
    OPTIONS: "Options",
    CLOSE: "Close",
  };

  // used for media linking modal
  public static ASSET_TYPES = {
    PROGRAMS: "PROGRAMS",
    SEASON: "SEASON",
    PEOPLE: "PEOPLE",
    CHANNEL: "CHANNEL",
  };

  /**
   * TV Guide settings
   */
  public static TV_GUIDE = {
    ALLOW_EDIT: true,
  };
  /***
   * Error message
   */
  public static ERROR = {
    0: "Something went wrong! Please try again later",
    500: "Something went wrong! Please try again later",
    503: "Service unavailable. Please try again later",
    401: "Unauthorized",
    TOKEN_EXPIRY: "Error_Token_Expired: redirecting to login.",
  };

  /***
   * Error message
   */

  public static IMAGE_TYPES = {
    USER_PROFILE: "USER_PROFILE",
  };

  public static PLATFORM_COMMUNITY_ID = "PLATFORM_COMMUNITY";

  public static CAROUSEL_TYPES = {
    LANDSCAPE: 300,
    PORTRAIT: 240,
  };

  public static RAIL_PAGE_TYPES = {
    DASHBOARD: "DASHBOARD",
    COMMUNITY_LANDING: "COMMUNITY_LANDING",
    COMMUNITY_OVERVIEW: "OVERVIEW",
  };

  public static RAIL_CATEGORY_TYPES = {
    CONTINUEWATCHING: "CONTINUEWATCHING",
    TOPCOMMUNITY: "TOPCOMMUNITY",
    NORMAL: "NORMAL",
    MYCOMMUNITY: "MYCOMMUNITY",
    COMPLETED: "COMPLETED",
  };

  public static RAIL_TYPES = {
    COMMUNITY: "COMMUNITY",
    COURSES: "COURSES",
  };

  public static COMMUNITY_VISIBILITY_TYPE = {
    PUBLIC: "public",
    PRIVATE: "private",
    ALL: "all",
  };

  public static COMMUNITY_ID = {
    ALL: "all",
  };
  public static RAIL_DATA_TYPE = {
    RAILID: "RAILID",
    PAGEID: "PAGEID",
    SEARCH: "SEARCH",
  };
  public static RAIL_SETTINGS = {
    LENGTH: 20,
  };

  public static COMMUNITY_TYPES = {
    PLATFORM: "PLATFORM",
    PUBLIC: "PUBLIC",
    PRIVATE: "PRIVATE",
  };

  public static SEARCH = {
    COMMUNITY: "communities",
    COURSES: "courses",
  };

  public static USER_TYPE = {
    PUBLIC_USER: "Learner",
  };

  // public static SUPPORTED_ROLES = {
  //   LMS: [Role.Teacher],
  //   SKILL: [Role.Learner],
  // };
}
