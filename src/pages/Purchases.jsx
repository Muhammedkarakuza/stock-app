import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import PurchaseTable from "../components/PurchaseTable";
import useStockCall from "../service/useStockCall";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import PurchaseModal from "../components/PurchaseModal";

const Purchases = () => {
  const { getStocks, getProPurBranFirm } = useStockCall();
  const { error, loading, purchases } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);

  const initialState = {
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  };
  const [info, setInfo] = useState(initialState);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };
  useEffect(() => {
    getProPurBranFirm();
  }, []); //eslint-disable-line

  return (
    <Container>
      <Button variant="contained" onClick={handleOpen}>
        New Purchase
      </Button>
      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      {error && <ErrorMsg />}
      {loading && <TableSkeleton />}
      {!error && !loading && !purchases?.length && <NoDataMsg />}
      {!error && !loading && purchases?.length > 0 && (
        <PurchaseTable setInfo={setInfo} handleOpen={handleOpen} />
      )}
    </Container>
  );
};

export default Purchases;
