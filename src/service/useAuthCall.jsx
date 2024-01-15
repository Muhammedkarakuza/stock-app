import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login islemi basarili.");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login islemi basarisiz oldu.");
      console.log(error);
    }
  };
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register işlemi başarısız oldu");
    }
  };

  const logout = async () => {};
  return { login, register, logout };
};
export default useAuthCall;
