import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockCall from "../service/useStockCall";
import { useSelector } from "react-redux";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const { getStocks } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const initialState = {
    categoryId: "",
    brandId: "",
    name: "",
  };
  const [info, setInfo] = useState(initialState);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    getStocks("products");
    getStocks("categories");
    getStocks("brands");
  }, []);

  console.log(products);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>
        New Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <ProductTable />
    </div>
  );
};

export default Products;
