import { User } from "../models/user";
import { AppConstants } from "../environments/app-constants";
import { environment } from "../environments/environment";
import { navigateAsPerSessionValidity } from "../services/helpers";

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
    navigateAsPerSessionValidity(false);
  },

  clearCurrentUser: (redirect=true) => {
    set({ currentUser: null });
    document.cookie = (AppConstants.SESSION_STORAGE_ITEMS.USER_INFO + "=logged-out;domain=" + environment.cookieDomain + "; path=/").trim();
    if (redirect) window.location.replace("/");
  },
});

export default authStore;
