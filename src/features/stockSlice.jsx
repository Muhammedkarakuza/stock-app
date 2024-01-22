import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    // getFirmsSuccess: (state, { payload }) => {
    //   state.firms = payload;
    //   state.loading = false;
    // },
    // getSalesSuccess: (state, { payload }) => {
    //   state.sales = payload;
    //   state.loading = false;
    // },
    getStocksSuccess: (state, { payload: { url, apiData } }) => {
      state[url] = apiData;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getStocksSuccess, fetchStart, fetchFail } = stockSlice.actions;
export default stockSlice.reducer;
