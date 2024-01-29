import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { buttonStyle } from "../styles/globalStyles";
import useStockCall from "../service/useStockCall";

export default function FirmCard({ firm, handleOpen, setInfo }) {
  const { address, image, name, phone, _id } = firm;
  const { deleteStock } = useStockCall();
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        height: "400px",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={200}
          mt={2}
        >
          {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <EditIcon
          sx={buttonStyle}
          onClick={() => {
            handleOpen();
            setInfo(firm);
          }}
        />
        <DeleteOutlineIcon
          sx={buttonStyle}
          onClick={() => deleteStock("firms", _id)}
        />
      </CardActions>
    </Card>
  );
}
