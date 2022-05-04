import React, { useEffect, useState } from "react";

//style
import "./BillBotModal.css";

export default function BillBotModal({ billTitle, addMyBills }) {
  const [billAmount, setBillamount] = useState(0);
  const [title, setTitle] = useState(billTitle);

  const addMyBill = () => {
    const bill = {
      title,
      billAmount,
    };
    addMyBills(bill);
  };
  return (
    <div className="bill-bot-modal-backdrop">
      <div className="second-bill-bot-modal">
        <h3>{billTitle}</h3>
        <form>
          <label>
            <span>Tutar: </span>
            <input
              type="text"
              value={billAmount}
              onChange={(e) => setBillamount(e.target.value)}
            />
          </label>
        </form>
        <button onClick={addMyBill}>Faturalarıma ekle</button>
      </div>
    </div>
  );
}
