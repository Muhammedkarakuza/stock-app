import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { ModalStyle } from "../styles/globalStyles";
import { Button } from "@mui/material";
import useStockCall from "../service/useStockCall";

export default function FirmsModal({ open, handleClose, info, setInfo }) {
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const { postStock, putStock } = useStockCall();
  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      postStock("firms", info);
    } else {
      putStock("firms", info);
    }
    handleClose();
  };
  console.log(info);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
