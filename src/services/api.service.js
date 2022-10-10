import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = ({secure = true, showToast = true} = {}) => {
  let headers = {};
  

  const axiosInstance = axios.create({
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        if (showToast) {
          if (response?.data?.success) {
            toast.success(response.data?.message);
          } else if (!response?.data?.success) {
            toast.error(response.data?.message);
          }
        }
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      if (error.response?.data?.message) {
        if (showToast) {
          toast.error(error.response?.data?.message);
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );
  return axiosInstance;
};

export default axiosInstance;
