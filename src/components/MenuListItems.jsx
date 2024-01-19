import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";
const icons = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    icon: <ShoppingCartIcon />,
    title: "Purchases",
    url: "/stock/purchases/",
  },
  {
    icon: <AttachMoneyIcon />,
    title: "Sales",
    url: "/stock/sales/",
  },
  {
    icon: <StoreIcon />,
    title: "Firms",
    url: "/stock/firms/",
  },
  {
    icon: <StarsIcon />,
    title: "Brands",
    url: "/stock/brands/",
  },
  {
    icon: <InventoryIcon />,
    title: "Products",
    url: "/stock/products",
  },
];
const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <List>
        {icons.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.url)}
            //! Nested styling (icons and title)
            sx={{
              color: "#F3B928",
              "&:hover": { color: "red" },
              "&:hover .MuiListItemIcon-root": { color: "red" },
            }}
          >
            <ListItemButton>
              <ListItemIcon
                sx={{ color: "#F3B928", "&:hover": { color: "red" } }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
