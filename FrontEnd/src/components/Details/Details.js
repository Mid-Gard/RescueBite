
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import "./Details.css";

function SHOP({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [SHOP, setSHOP] = useState([]);

  useEffect(() => {
    const fetchSHOP = async () => {
      const response = await fetch("http://127.0.0.1:8000/driver_details/");
      const data = await response.json();
      setSHOP(data);
    };
    fetchSHOP();
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="SHOPHome">
      <div className="SHOPcontainer">
        <div className="MainContent">
          <div className="SHOPHeading">
            <p> Items in the Kitchen </p>
          </div>
          <div className="SHOP-container">
            {SHOP.map((Bus) => (
              <div className="Bus-card" key={Bus.id}>
                <div className="Bus-image-container">
                  <img
                    className="Bus-image"
                    src={"https://picsum.photos/seed/${Bus}/200/200"}
                    alt={`Bus ${Bus.Bus_Name}`}
                  />
                </div>
                <div className="Bus-info">
                  <div className="Bus-name">{Bus.Bus_Name}</div>
                  <div className="Bus-phone">{Bus.Bus_Phone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="BusSidebar"></div>
      </div>
    </div>
  );
}

export default SHOP;
