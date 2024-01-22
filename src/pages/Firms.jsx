import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockCall from "../service/useStockCall";

const Firms = () => {
  const { getFirms } = useStockCall();
  useEffect(() => {
    getFirms();
  }, [getFirms]);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
    </div>
  );
};

export default Firms;
