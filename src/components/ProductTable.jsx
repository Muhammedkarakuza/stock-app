import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCall from "../service/useStockCall";

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStock } = useStockCall();
  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "_id",
      headerName: "#",
      flex: 1.4,
      headerAlign: "center",
      sortable: false,
      align: "center",
      minWidth: "150px",
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => {
        // console.log(params);
        //+ Kategori ismi categoryId içindeki name değerinde saklı olduğu için value getter kullanıyoruz
        return params.row?.categoryId.name;
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.2,
      align: "center",
      headerAlign: "center",
      valueGetter: (params) => params.row?.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
    },

    {
      headerName: "Actions",
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("products", params.id)}
          label="Delete"
        />,
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
