import React, { useState } from "react";
import BillBotModal from "../../../../components/bill-bot/BillBotModal";
//style
import "./IncomeExpenses.css";
import MyIncomeExpenses from "../../MyIncomeExpenses";

export default function IncomeExpenses() {
  const [myBills, setMybills] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addMyBills = (bill) => {
    setMybills((myBills) => {
      return [...myBills, bill];
    });
  };

  return (
    <div className="income-expenses">
      <div>
        <button className="bill-list-button" onClick={() => setShowModal(true)}>
          Fatura Listesi
        </button>
        {showModal && (
          <div className="bill-bot-modal-page">
            <BillBotModal addMyBills={addMyBills} billTitle={"Netflix"} />
            <BillBotModal addMyBills={addMyBills} billTitle={"Prime"} />
            <BillBotModal addMyBills={addMyBills} billTitle={"HBO"} />
          </div>
        )}
      </div>
      <div className="my-income-expenses">
        <MyIncomeExpenses myBills={myBills} />
      </div>
    </div>
  );
}
