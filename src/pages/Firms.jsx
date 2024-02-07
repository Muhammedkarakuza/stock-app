import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockCall from "../service/useStockCall";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import FirmsModal from "../components/FirmsModal";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import ProductTable from "../components/ProductTable";

const Firms = () => {
  // const { getFirms, getSales } = useStockCall();
  const { getStocks } = useStockCall();
  const { firms, error, loading } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };

  useEffect(() => {
    getStocks("firms");
    getStocks("sales");
  }, []);

  console.log(firms);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>
      <FirmsModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {error && <ErrorMsg />}

      {loading && <TableSkeleton />}

      {!error && !loading && !firms.length && <NoDataMsg />}

      {!loading && !error && firms.length > 0 && (
        <Grid container gap={3} mt={4} justifyContent="center">
          {firms?.map((firm) => (
            <Grid item key={firm._id}>
              <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Firms;
