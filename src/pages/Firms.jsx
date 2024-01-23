import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockCall from "../service/useStockCall";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import FirmsModal from "../components/FirmsModal";

const Firms = () => {
  // const { getFirms, getSales } = useStockCall();
  const { getStocks } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Button variant="contained">New Firm</Button>
      <FirmsModal />

      <Grid container gap={3} mt={4} justifyContent="center">
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
