import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "./useAxios";

const useAuthCall = () => {
  const { axiosWithToken, axiosPublic } = useAxios();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      //! Firs Method
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      //! Second Method
      const { data } = await axiosPublic.post("/auth/login", userInfo);
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
      //! First Method
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/users/`,
      //   userInfo
      // );
      //! Second Method
      const { data } = await axiosPublic.post("/users/", userInfo);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register işlemi başarısız oldu");
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      //! First Method
      // await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      //! Second Method
      await axiosWithToken("/auth/logout");
      toastSuccessNotify("Logout işlemi başarılı");
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout işlemi başarısız oldu");
    }
  };
  return { login, register, logout };
};
export default useAuthCall;
