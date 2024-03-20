import "./Toolbar.scss";
import React, { useState } from "react";
import AppSettingsAltRoundedIcon from "@mui/icons-material/AppSettingsAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import { Iconbutton } from "@mui/material";

const Toolbar = () => {
  return (
    <div className="toolbar-main-box">
      <div className="avatar"></div>

      <button
        style={{
          backgroundColor: "transparent",
        }}
      ></button>

      <button className="component-icon">
        <AppSettingsAltRoundedIcon />
      </button>
      <button className="component-icon">
        <CalendarMonthRoundedIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button>
        <GroupsRoundedIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button className="component-icon">
        <WcRoundedIcon className="component-icon" sx={{ fontSize: "2rem" }} />
      </button>
      <button className="component-icon">
        <AccountBalanceRoundedIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button className="component-icon">
        <CurrencyBitcoinRoundedIcon sx={{ fontSize: "2rem" }} />
      </button>
      <button className="component-icon">
        <RestaurantRoundedIcon sx={{ fontSize: "2rem" }} />
      </button>
    </div>
  );
};

export default Toolbar;
