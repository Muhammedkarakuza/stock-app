import useAxios from "./useAxios";
import {
  fetchStart,
  fetchFail,
  getStocksSuccess,
} from "../features/stockSlice";
import { toastErrorNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken("/firms/");
  //     dispatch(getFirmsSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Firma bilgileri getirilemedi");
  //   }
  // };
  // const getSales = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken("/sales/");
  //     dispatch(getSalesSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Sales bilgileri getirilemedi");
  //   }
  // };
  const getStocks = async (url = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/`);
      const apiData = data.data;
      dispatch(getStocksSuccess({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgileri getirilemedi`);
    }
  };
  return { getStocks };
};

export default useStockCall;
