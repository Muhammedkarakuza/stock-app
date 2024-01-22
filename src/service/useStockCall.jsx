import useAxios from "./useAxios";
import { fetchStart, getFirmsSuccess, fetchFail } from "../features/stockSlice";
import { toastErrorNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken("/firms/");
      dispatch(getFirmsSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Firma bilgileri getirilemedi");
    }
  };
  return { getFirms };
};

export default useStockCall;
