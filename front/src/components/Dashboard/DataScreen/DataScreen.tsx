import React from "react";
import "./DataScreen.scss";
import TimelineSection from "./TimelineSection/TimelineSection";
import DataSection from "./DataSection/DataSection";

const DataScreen = () => {
  return (
    <div className="data-screen-main-box">
      <DataSection />
      <TimelineSection />
    </div>
  );
};

export default DataScreen;
