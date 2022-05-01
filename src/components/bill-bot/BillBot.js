import React, { useState } from "react";

//style
import "./BillBot.css";

export default function BillBot({ BillTitle }) {
  const [billName, setBillName] = useState("");
  return (
    <div>
      <form>
        <label>
          <span>{BillTitle}</span>
          <input
            type="text"
            required
            value={billName}
            onChange={(e) => setBillName(e.target.value)}
          />
        </label>

        <label>
          <span>Description</span>
          <input type="text" />
        </label>

        <label>
          <span>Category</span>
          <input type="text" />
        </label>

        <label>
          <span>Next Bill</span>
          <input type="text" />
        </label>

        <label>
          <span>Billing Cycle</span>
          <input type="text" />
        </label>

        <label>
          <span>Remind</span>
          <input type="text" />
        </label>

        <label>
          <span>Currency</span>
          <input type="text" />
        </label>
      </form>
    </div>
  );
}
