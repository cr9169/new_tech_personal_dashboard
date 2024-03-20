import React from "react";
import "./Dashboard.scss";
import Toolbar from "./Toolbar/Toolbar";
import DataScreen from "./DataScreen/DataScreen";

const Dashboard = () => {
  return (
    <div className="dashboard-main-box">
      <Toolbar />
      <DataScreen />
    </div>
  );
};

export default Dashboard;
