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
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"Netflix"}
              color={"#fee3e3"}
              logo={"/img/netflix.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"Prime"}
              color={"#e3edfe"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"HBO"}
              color={"#a9a9a9"}
              logo={"/img/HBO.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"Spotify"}
              color={"#cdffe4"}
              logo={"/img/spotify.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"Apple Müzik"}
              color={"#a9a9a9"}
              logo={"/img/apple.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"Vodafone"}
              color={"#fee3e3"}
              logo={"/img/vodafone.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"Youtube Premium"}
              color={"#fee3e3"}
              logo={"/img/youtube.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"HBO"}
              color={"#a9a9a9"}
              logo={"/img/HBO.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"HBO"}
              color={"#a9a9a9"}
              logo={"/img/HBO.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"HBO"}
              color={"#a9a9a9"}
              logo={"/img/HBO.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"HBO"}
              color={"#a9a9a9"}
              logo={"/img/HBO.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"HBO"}
              color={"#a9a9a9"}
              logo={"/img/HBO.png"}
            />
            <BillBotModal
              addMyBills={addMyBills}
              billTitle={"HBO"}
              color={"#a9a9a9"}
              logo={"/img/HBO.png"}
            />
          </div>
        )}
      </div>
      <div className="my-income-expenses">
        <MyIncomeExpenses myBills={myBills} />
      </div>
    </div>
  );
}
