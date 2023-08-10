import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="containerr">
        <div className="details">
          <h1>Food In Kitchen</h1>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
          <h3>Sold</h3>
        </div>
        <div className="buttons">
          <div className="Sell">Sell</div>
          <div className="Sell">Donate</div>
        </div>
      </div>
      <div className="containerr">
        <div className="details">
          <h1>Bevarages</h1>
          <h2>Sold</h2>
          <div className="detailsContent">
            <p>Wheat : 10kg Validy : 2 months</p>
            <p>Rice : 10kg Validy : 2 months</p>
          </div>
          <h2>Left</h2>
          <div className="detailsContent">
            <p>Wheat : 10kg Validy : 2 months</p>
            <p>Rice : 10kg Validy : 2 months</p>
            <p>Coffee : 10kg Validy : 2 months</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
