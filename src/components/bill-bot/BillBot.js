import React, { useState } from "react";

//style
import "./BillBot.css";

export default function BillBot({ BillTitle }) {
  const [billName, setBillName] = useState("");
  return (
    <div className="bill-bot">
      <form>
        <label className="bill-bot-sections">
          <span>{BillTitle}</span>
          <input
            type="text"
            required
            value={billName}
            onChange={(e) => setBillName(e.target.value)}
          />
        </label>

        <label className="bill-bot-sections">
          <span>Description</span>
          <input type="text" />
        </label>

        <label className="bill-bot-sections">
          <span>Category</span>
          <input type="text" />
        </label>

        <label className="bill-bot-sections">
          <span>Next Bill</span>
          <input type="text" />
        </label>

        <label className="bill-bot-sections">
          <span>Billing Cycle</span>
          <input type="text" />
        </label>

        <label className="bill-bot-sections">
          <span>Remind</span>
          <input type="text" />
        </label>

        <label className="bill-bot-sections">
          <span>Currency</span>
          <input type="text" />
        </label>
      </form>
    </div>
  );
}
