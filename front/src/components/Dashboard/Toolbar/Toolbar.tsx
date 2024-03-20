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
      <div className="avatar"></div>
      <button>
        <AppSettingsAltRoundedIcon
          className="component-icon"
          sx={{ fontSize: "2rem" }}
        />
      </button>
      <button>
        <CalendarMonthRoundedIcon
          className="component-icon"
          sx={{ fontSize: "2rem" }}
        />
      </button>
      <button>
        <GroupsRoundedIcon
          className="component-icon"
          sx={{ fontSize: "2rem" }}
        />
      </button>
      <button>
        <WcRoundedIcon className="component-icon" sx={{ fontSize: "2rem" }} />
      </button>
      <button>
        <AccountBalanceRoundedIcon
          className="component-icon"
          sx={{ fontSize: "2rem" }}
        />
      </button>
      <button>
        <CurrencyBitcoinRoundedIcon
          className="component-icon"
          sx={{ fontSize: "2rem" }}
        />
      </button>
      <button>
        <RestaurantRoundedIcon
          className="component-icon"
          sx={{ fontSize: "2rem" }}
        />
      </button>
    </div>
  );
};

export default Toolbar;
