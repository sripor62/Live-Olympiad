import { AppConstants } from "../environments/app-constants";
import { environment } from "../environments/environment";
import jwt_decode from "jwt-decode";

export function navigateAsPerSessionValidity(authenticate) {
  const cookieServiceValue_USER_INFO = document.cookie.split(";").filter((item)=> item.trim().startsWith(AppConstants.SESSION_STORAGE_ITEMS.USER_INFO));
  let userInfoVal=""
  var userInfo={}
    // userInfoVal =cookieServiceValue_USER_INFO[0].trim().split("=")[1];
    if(window.localStorage.getItem("current_user")){console.log("user",window.localStorage.getItem("current_user"))
    userInfoVal=window.localStorage.getItem("current_user")
     var userInfo = JSON.parse(userInfoVal).state.currentUser;
    }
  console.log(userInfo)
  if (userInfo) {
    console.log("userInfo",userInfo)
    // const userInfo = JSON.parse(userInfoVal);
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