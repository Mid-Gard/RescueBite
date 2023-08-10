
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

import "./Sell.css";

function Learn({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Learn, setLearn] = useState([]);
  const [SHOP, setSHOP] = useState([]);

  useEffect(() => {
    const fetchSHOP = async () => {
      const response = await fetch("http://127.0.0.1:8000/detail/");
      const data = await response.json();
      console.log(data)
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
  
  // const response = {"status":true,"item":"chiken","validTime":5,"cat":"veg","weight":2}
  // console.log(response);

  return (
    <div className="SHOPHome">
      <div className="SHOPcontainer">
        <div className="MainContent">
          <div className="SHOPHeading">
            <p> Items in the Kitchen </p>
          </div>
          <div className="SHOP-container">
            {SHOP.map((Bus) => (
              <div className="Bus-info">
                <div className="Bus-name">{Bus.item}</div>
                <div className="Bus-phone">{Bus.validTime}</div>
                <div className="Bus-phone">{Bus.cat}</div>
                <div className="Bus-phone">{Bus.weight}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="BusSidebar"></div>
      </div>
    </div>
  );
}

export default Learn;
