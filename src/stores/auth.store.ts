import { User } from "../models/user";
import { AppConstants } from "../constants/app-constants";
import { environment } from "../environments/environment";
import { checkAuthCookie } from "../utils/helpers";

let authStore = (set) => ({
  currentUserSubject: User,
  currentUser: User,
  UserObj: User,

  setCurrentUser: (userData: User) => {
    set({ currentUser: userData });
    console.log("hiiii from cookie",userData)
    console.log("student",AppConstants.SESSION_STORAGE_ITEMS.USER_INFO)
    
    const userDetails = JSON.stringify(userData);
    console.log("userDetails",userDetails);
    document.cookie = (AppConstants.SESSION_STORAGE_ITEMS.USER_INFO + "=" + userDetails + ";domain=" + environment.cookieDomain + "; path=/").trim();
    console.log("domaincookie",document.cookie)
    checkAuthCookie();
  },

  clearCurrentUser: (redirect=true) => {
    set({ currentUser: null });
    document.cookie = (AppConstants.SESSION_STORAGE_ITEMS.USER_INFO + "=logged-out;domain=" + environment.cookieDomain + "; path=/").trim();
    if (redirect) window.location.replace("/");
  },
});

export default authStore;
