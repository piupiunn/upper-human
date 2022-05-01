import React, { useState } from "react";
import BillBot from "../../../../components/bill-bot/BillBot";
//style
import "./IncomeExpenses.css";

export default function IncomeExpenses() {
  return (
    <div>
      <BillBot BillTitle={"Netflix"} />
    </div>
  );
}
