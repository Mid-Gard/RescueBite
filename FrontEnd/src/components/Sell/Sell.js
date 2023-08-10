
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
import { Link } from "react-router-dom";

function Sell({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [Sell, setSell] = useState([]);
  const [Sell, setSell] = useState([]);

  useEffect(() => {
    const fetchSell = async () => {
      const response = await fetch("http://127.0.0.1:8000/detail");
      // console.log(response)
      // const d = fetch("/detail");
      // console.log(d)
      const data = await response.json();
      console.log(data)
      setSell(data);
    };
    fetchSell();
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
    <div className="SellHome">
      <div className="Sellcontainer">
        <div className="MainContent">
          <div className="SellHeading">
            <p> Items in the Kitchen </p>
              <div className="table-head">
                <div className="Bus-name bus-element">Item Name</div>
                <div className="Bus-phone bus-element">Valid Till (Hrs)</div>
                <div className="Bus-phone bus-element">Catagory</div>
                <div className="Bus-phone bus-element">Quantity</div>
              </div>
          </div>
          <div className="Sell-container">
            {Sell.map((Bus) => (
              <div className="Bus-info">
                <div className="Bus-name bus-element">{Bus.item}</div>
                <div className="Bus-phone bus-element">{Bus.validTime}</div>
                <div className="Bus-phone bus-element">{Bus.cat}</div>
                <div className="Bus-phone bus-element">{Bus.weight}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="BusSidebar"></div>
      </div>
    </div>
  );
}

export default Sell;
