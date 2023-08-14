
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

import "./Donate.css";

function Donate({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Donate, setDonate] = useState([]);

  useEffect(() => {
    const fetchDonate = async () => {
      const response = await fetch("http://127.0.0.1:8000/detail");
      // console.log(response)
      // const d = fetch("/detail");
      // console.log(d)
      const data = await response.json();
      console.log(data);
      setDonate(data);
    };
    fetchDonate();
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="DonateHome">
      <div className="Donatecontainer">
        <div className="MainContent">
          <div className="DonateHeading">
            <p> Food Donated </p>
            <div className="table-head-donate">
              <div className="Bus-name bus-element-donate">Item Name</div>
              <div className="Bus-phone bus-element-donate">Catagory</div>
              <div className="Bus-phone bus-element-donate">Quantity</div>
            </div>
          </div>
          <div className="Donate-container">
            {Donate.map((Bus) => (
              <div className="Bus-info-donate">
                <div className="Bus-name bus-element-donate">{Bus.name}</div>
                <div className="Bus-phone bus-element-donate">{Bus.cat}</div>
                <div className="Bus-phone bus-element-donate">{Bus.task}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="BusSidebar"></div>
      </div>
    </div>
  );
}

export default Donate;
