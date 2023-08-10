
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
import { Link } from "react-router-dom";

function Detail({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await fetch("http://127.0.0.1:8000/detail");
      const data = await response.json();
      setDetail(data);
    };
    fetchDetail();
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="DetailHome">
      <div className="Detailcontainer">
        <div className="MainContent">
          <div className="DetailHeading">
            <p> Items in the Kitchen </p>
          <div className="table-head">
            <div className="Bus-name bus-element">Item Name</div>
            <div className="Bus-phone bus-element">Valid Till (Hrs)</div>
            <div className="Bus-phone bus-element">Catagory</div>
            <div className="Bus-phone bus-element">Quantity</div>
          </div>
          </div>
          <div className="Detail-container">
            {Detail.map((Bus) => (
              <div className="Bus-info">
                <div className="Bus-name bus-element">{Bus.name}</div>
                <div className="Bus-phone bus-element">{Bus.validTime}</div>
                <div className="Bus-phone bus-element">{Bus.cat}</div>
                <div className="Bus-phone bus-element">{Bus.weight}</div>
                <Link to="/Sell">
                  <div className="Detail-btn">Sell</div>
                </Link>
                <Link to="/Donate">
                  <div className="donate-btn">Donate</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="BusSidebar"></div>
      </div>
    </div>
  );
}

export default Detail;
