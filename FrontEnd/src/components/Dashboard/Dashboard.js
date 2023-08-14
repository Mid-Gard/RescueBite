import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import logo from "../Header/ClubLogo.png"

function Dashboard() {
  const [Detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await fetch("http://127.0.0.1:8000/detail");
      const data = await response.json();
      setDetail(data);
    };
    fetchDetail();
  }, []);

  return (
    <div className="Dashboard">
      <div className="containerrr">
        <div className="sidebar">
          <div className="sidebarhead">Food in Kitchen</div>
          <div className="details">
            {Detail.map((Bus) => (
              <div className="dish-info">
                <div className="Bus-name each-element">{Bus.name}</div>
                <div className="Bus-phone each-element">{Bus.task} kg</div>
              </div>
            ))}
          </div>
        </div>
        <div className="wastebar">
          <div className="sidebarhead-waste">Food Expired</div>
          <div className="wastedetails">
            {Detail.map((Bus) => (
              <div className="dish-info-waste">
                <div className="Bus-name each-element">{Bus.name}</div>
                <div className="Bus-phone each-element">{Bus.task} kg</div>
              </div>
            ))}
          </div>
        </div>
        <div className="Mainheading">
          <div className="DashHead">
            <img src={logo} />
            <p>Rescue Bite</p>
          </div>
        </div>
        <div className="bttns">
          <Link to="/Details">
            <div className="morebtn">See More</div>
          </Link>
          <Link to="http://127.0.0.1:8000/sell">
            <div className="morebtn">Add Items</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
