export const COMMUNITY_ID = "2c9383c77015503d0170157a411b0001";
export const TOP_COURSE_CATEGORY = "036026f1-26aa-4be5-b50f-603bd4e09834";
export const TOP_COURSE = "java";
export const USER_ID = "5908cffd-9ef7-4c9a-919b-b649dd754b59";
export const FEATURED_COURSE = "131";
export const TRENDING_COURSE = "132";
export const NEW_ADDITIONS = "133";
export const EXCLUSIVE_COURSES = "134";
export const RESEND_OTP_SECONDS = 15;
export const ADDED_ITEMS = "ADDED_ITEMS";
export const USER_DATA = "USER_DATA";

export const _401 = "401";
export const _400 = "400";
export const _500 = "500";
export const _404 = "404";
export const _409 = "409";

export const IMG_FALLBACK_THUMBNAIL = "assets/images/fallback-thumbnail.png";
export const FALLBACK_BANNER = "assets/images/banner-fallback.png";
export const FALLBACK_TILE = "assets/images/fallback-listImage.png";
export const IMG_LOCATION = "assets/images/location.png";
export const IMG_TELEPHONE = "assets/images/telephone.png";
export const IMG_MAIL = "assets/images/mail.png";
export const HUBBLE_HOX = "assets/images/hubble-hox.png";
export const AUTH_URL = "https://ms-dev.hubblehox.work/user/auth/login";
export const GOOGLE_TYPE = "GOOGLE";
export const FACEBOOK_TYPE = "FACEBOOK";

export const cipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

export const decipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
};

// To create a cipher
export const myCipher = cipher("KEY");
export const myDecipher = decipher("KEY");

// export const HUBBLEHOX_HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>(
//   'Custom interceptors to be applied for integrating with the HubbleHox REST API'
// );
