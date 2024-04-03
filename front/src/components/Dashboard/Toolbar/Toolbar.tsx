import "./Toolbar.scss";
import { useState } from "react";
import {
  AppSettingsAltRounded,
  CalendarMonthRounded,
  GroupsRounded,
  WcRounded,
  AccountBalanceRounded,
  CurrencyBitcoinRounded,
  RestaurantRounded,
  AppsRounded, // Assuming AppsIcon is actually AppsRounded based on pattern
} from "@mui/icons-material";

const Toolbar = () => {
  const [chosenComponent, setChoseComponent] = useState("apps-icon");

  const handleComponentClick = (className: string) =>
    setChoseComponent(className);

  const iconComponents = [
    { className: "apps-icon", Icon: AppsRounded },
    { className: "social-media-icon", Icon: AppSettingsAltRounded },
    { className: "calendar-icon", Icon: CalendarMonthRounded },
    { className: "visits-icon", Icon: GroupsRounded },
    { className: "gender-icon", Icon: WcRounded },
    { className: "bank-icon", Icon: AccountBalanceRounded },
    { className: "crypto-icon", Icon: CurrencyBitcoinRounded },
    { className: "weekly-nutrition-icon", Icon: RestaurantRounded },
  ];

  const getIconStyle = (className: string) => ({
    width: "2.5rem",
    height: "2.5rem",
    backgroundColor: chosenComponent === className ? "white" : "transparent",
    borderRadius: "50%",
    border: `0.4rem solid ${
      chosenComponent === className ? "white" : "transparent"
    }`,
  });

  return (
    <div className="toolbar-main-box">
      <div className="avatar-wrap">
        <div className="avatar"></div>
      </div>
      {iconComponents.map(({ className, Icon }) => (
        <button
          key={className}
          className={className}
          onClick={() => handleComponentClick(className)}
        >
          <Icon sx={getIconStyle(className)} />
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
