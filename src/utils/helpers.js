import { AppConstants } from "../constants/app-constants";
import { environment } from "../environments/environment";
import jwt_decode from "jwt-decode";
import { WindowSharp } from "@mui/icons-material";


export function loadScript(src) {
 
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
export function checkAuthCookie() {
  const cookieServiceValue_USER_INFO = document.cookie.split(";").filter((item)=> item.trim().startsWith(AppConstants.SESSION_STORAGE_ITEMS.USER_INFO));
  let userInfoVal=""
  if(cookieServiceValue_USER_INFO.length>0){
    userInfoVal =cookieServiceValue_USER_INFO[0].trim().split("=")[1];}
    console.log(userInfoVal)
    if (userInfoVal !== "logged-out" && userInfoVal!=="") {
      const userInfo = JSON.parse(userInfoVal);
      let decodedToken = jwt_decode(userInfo.access_token);
      console.log("Decoded Token", decodedToken);
      let currentDate = new Date();
      console.log(currentDate.getTime);
      console.log(decodedToken.exp*1000);
      if (decodedToken.exp * 1000 >= currentDate.getTime()) {    
        if (environment.cookieDomain !== "localhost") {
          if (userInfo.userRole === "STUDENT") {
            window.location.replace(environment.learnerUrl);
          }
        } else {
          // window.location.replace("/");
        }
      }
    } else if(userInfoVal==="logged-out"){ 
      document.cookie = (AppConstants.SESSION_STORAGE_ITEMS.USER_INFO + "=;domain=" + environment.cookieDomain + "; path=/").trim();
  
    } else if(userInfoVal!=="logged-out"){
      document.cookie = (AppConstants.SESSION_STORAGE_ITEMS.USER_INFO + "=logged-out;domain=" + environment.cookieDomain + "; path=/").trim();
      window.location.href="/";
       
    }
  
}