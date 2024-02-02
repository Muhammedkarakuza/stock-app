import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { ModalStyle } from "../styles/globalStyles";
import Button from "@mui/material/Button";
import useStockCall from "../service/useStockCall";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, info, setInfo }) {
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const { categories, brands } = useSelector((state) => state.stock);
  const { postStock } = useStockCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("products", info);
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
            <FormControl fullWidth>
              <InputLabel id="categoryId">Category</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                name="categoryId"
                value={info.categoryId}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brandId">Brand</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                name="brandId"
                value={info.brandId}
                label="Brand"
                onChange={handleChange}
              >
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              Add Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
