import React from "react";
import "./DataScreen.scss";
import DataSection from "./DataSection/DataSection";
import TimelineSection from "./TimelineSection/TimelineSection";

const DataScreen = () => {
  return (
    <div className="data-screen-main-box">
      <DataSection />
      <TimelineSection />
    </div>
  );
};

export default DataScreen;
