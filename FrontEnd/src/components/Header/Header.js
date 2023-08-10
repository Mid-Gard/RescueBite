import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./ClubLogo.png"; // Import the logo file

import "./Header.css";

function Header({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="header">
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
          <div className="logo">
            <img src={logo} alt="logos" className="logo-img" />
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rescue Bite
          </Typography>
          <div className="navbuttons">
            <div className="nav-item">
              <Typography variant="h6" component="div">
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </Typography>
            </div>
            <div className="nav-item">
              <Typography variant="h6" component="div">
                <Link to="/Sell" className="nav-link">
                  Sell
                </Link>
              </Typography>
            </div>
            <div className="nav-item">
              <Typography variant="h6" component="div">
                <Link to="/Donate" className="nav-link">
                  Donate
                </Link>
              </Typography>
            </div>
            <div className="nav-item">
              <Typography variant="h6" component="div">
                <Link to="/Details" className="nav-link">
                  Kitchen
                </Link>
              </Typography>
            </div>
          </div>
          <div className="user-menu">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className="user-icon"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
