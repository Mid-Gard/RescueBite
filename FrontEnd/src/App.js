import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Dashboard/Dashboard";
import Sell from "./components/Sell/Sell";
import Donate from "./components/Donate/Donate";
import Details from "./components/Details/Details"
import ClaimerDashboard from "./components/Claimer/Claimer-Dashboard/Home"

import "./App.css";

function App() {
  return (
    <Router>
      <div className="Appcontainer">
        <div className="Appcontent">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/Donate" element={<Donate />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Claimer/Dashboard" element={<ClaimerDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
