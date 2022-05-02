import React from "react";
//style
import "./GelirGider.css";
//components
import MyMissions from "./missions/Missions";
import IncomeExpenses from "./inventory/income-expenses/IncomeExpenses";

import MySkills from "./my-skills/MySkills";

export default function GelirGider() {
  return (
    <div className="me">
      <div className="me-income-expenses">
        <IncomeExpenses />
      </div>

      <div className="me-missions"></div>

      <div className="me-myskills">
        <MySkills />
      </div>
    </div>
  );
}
