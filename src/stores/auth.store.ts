import { User } from "../models/user";
import { AppConstants } from "../environments/app-constants";
import { environment } from "../environments/environment";
import { navigateAsPerSessionValidity } from "../services/helpers";

let authStore = (set:any) => ({
  currentUserSubject: User,
  currentUser: User,
  UserObj: User,
  reportData:{},
  
  setCurrentUser: (userData: User) => {
    set({ currentUser: userData });
    const userDetails = JSON.stringify(userData);
    document.cookie = (AppConstants.SESSION_STORAGE_ITEMS.USER_INFO + "=" + userDetails + ";domain=" + environment.cookieDomain + "; path=/").trim();
    navigateAsPerSessionValidity(false);
  },

  clearCurrentUser: (redirect=true) => {
    window.localStorage.removeItem("grade")
    set({ currentUser: null });
    document.cookie = (AppConstants.SESSION_STORAGE_ITEMS.USER_INFO + "=logged-out;domain=" + environment.cookieDomain + "; path=/").trim();
    if (redirect) window.location.replace("/");
  },
  setReportData: (reportData:any) => {
    set({ reportData: reportData });
  }
});

export default authStore;
