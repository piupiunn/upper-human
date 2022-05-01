import React from "react";
//style
import "./MainPage.css";
import IncomeExpenses from "./pages/me/inventory/income-expenses/IncomeExpenses";
import Missions from "./pages/me/missions/Missions";
import MyMissions from "./pages/me/missions/my-missions/MyMissions";

export default function MainPage() {
  return (
    <div>
      <Missions />
      <MyMissions />{" "}
    </div>
  );
}
