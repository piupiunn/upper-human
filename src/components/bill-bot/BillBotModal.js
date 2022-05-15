import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Plus } from "@styled-icons/feather/Plus";

//style
import "./BillBotModal.css";

export default function BillBotModal({ billTitle, addMyBills, color, logo }) {
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
      <div
        className="second-bill-bot-modal"
        style={{ backgroundColor: ` ${color}` }}
      >
        <div className="title-section">
          <img src={` ${logo} `} alt="netflix logo" />
        </div>

        <div className="amount-section">
          <form>
            <label>
              <h5 className="title">{billTitle}</h5>
              <span>Tutar: </span>
              <input
                type="text"
                value={billAmount}
                onChange={(e) => setBillamount(e.target.value)}
              />
            </label>
          </form>
          <PlusIcon className="billbot-button " onClick={addMyBill} />
        </div>
      </div>
    </div>
  );
}
const PlusIcon = styled(Plus)`
  line {
    color: black;
    width: 150px;
    height: 150px;
  }
`;
