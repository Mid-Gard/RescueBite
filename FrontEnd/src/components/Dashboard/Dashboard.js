import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="containerrr">
        <div className="details">
          <h1>Food In Kitchen</h1>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
          <h3>Butter Chicken</h3>
        </div>
        <div className="buttons">
          <div className="Sell">Sell</div>
          <div className="Donate">Donate</div>
          <Link to="http://127.0.0.1:8000/sell">
            <div className="Donate">Add</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
