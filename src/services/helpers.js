import { AppConstants } from "../environments/app-constants";
import { environment } from "../environments/environment";
import jwt_decode from "jwt-decode";

export function navigateAsPerSessionValidity(authenticate) {
  const cookieServiceValue_USER_INFO = document.cookie.split(";").filter((item)=> item.trim().startsWith(AppConstants.SESSION_STORAGE_ITEMS.USER_INFO));
  let userInfoVal=""
  if(cookieServiceValue_USER_INFO.length>0){
    userInfoVal =cookieServiceValue_USER_INFO[0].trim().split("=")[1];
  }
  
  if (userInfoVal !== "logged-out" && userInfoVal!=="") {
    const userInfo = JSON.parse(userInfoVal);
    let decodedToken = jwt_decode(userInfo.access_token);
   
    let currentDate = new Date();
   
    if (decodedToken.exp * 1000 >= currentDate.getTime()) {    
      if (userInfo.userRole === "STUDENT") {
        if (!authenticate) {
          // window.location.href="/dashboard";
          return;
        } else {
          return;
        }
      }
    }
  }
  if (authenticate) {
    window.location.href="/"; 
  }
}