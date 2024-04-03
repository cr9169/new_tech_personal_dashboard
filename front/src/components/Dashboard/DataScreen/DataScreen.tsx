import React from "react";
import "./DataScreen.scss";
import ComponentsSection from "./ComponentsSection/ComponentsSection";
import NotesSection from "./NotesSection/NotesSection";

const DataScreen = () => {
  return (
    <div className="data-screen-main-box">
      <ComponentsSection />
      <NotesSection />
    </div>
  );
};

export default DataScreen;
