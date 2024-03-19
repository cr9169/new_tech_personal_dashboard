import "./Toolbar.scss";
import React from "react";
import AppSettingsAltRoundedIcon from "@mui/icons-material/AppSettingsAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";

const Toolbar = () => {
  return (
    <div className="toolbar-main-box">
      <AppSettingsAltRoundedIcon />
      <CalendarMonthRoundedIcon />
      <GroupsRoundedIcon />
      <WcRoundedIcon />
      <AccountBalanceRoundedIcon />
      <CurrencyBitcoinRoundedIcon />
      <RestaurantRoundedIcon />
    </div>
  );
};

export default Toolbar;
