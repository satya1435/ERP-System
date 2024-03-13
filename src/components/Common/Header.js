import React, { useState } from "react";
import { Typography, IconButton, Menu, MenuItem, Box } from "@mui/joy";
import {
  AppBar,
  Toolbar,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuItems = [
    { label: "Dashboard", path: "/", icon: <DashboardOutlinedIcon /> },
    {
      label: "Products",
      path: "/products",
      icon: <ShoppingBagOutlinedIcon />,
    },
    { label: "Orders", path: "/orders", icon: <AssignmentOutlinedIcon /> },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Responsive Brand Name */}
        <Typography
          level="h3"
          noWrap
          component="div"
          color="neutral"
          sx={{
            display: { xs: "flex", md: "flex", justifyContent: "center" },
            color: "white",
          }}
        >
          ERP System
        </Typography>
        {/* Menu Button for Smaller Screens */}
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuOutlinedIcon />
        </IconButton>
        {/* Menu for Larger Screens */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="text"
              color="inherit"
              component={Link}
              to={item.path}
              sx={{
                textTransform: "capitalize",
                color: "white",
                marginX: "8px",
              }}
              startIcon={item.icon}
            >
              <Typography level="body-md" textColor={"common.white"}>
                {item.label}
              </Typography>
            </Button>
          ))}
        </Box>
        {/* Responsive Menu for Smaller Screens */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleMenuClose}
          sx={{
            display: { xs: "block", md: "none" },
            zIndex: 1500, // Set z-index to ensure menu appears on top
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={handleMenuClose}
              component={Link}
              to={item.path}
              sx={{ display: "flex", alignItems: "center", padding: '10px 16px'}}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                {item.icon}
              </ListItemIcon>{" "}
              {/* Adjust the margin */}
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
