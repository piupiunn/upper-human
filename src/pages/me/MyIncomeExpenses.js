import React from "react";
//style
import "./MyIncomeExpenses.css";
//components

export default function MyIncomeExpenses({ myBills }) {
  console.log(myBills);
  return (
    <div className="my-bills">
      {myBills?.map((myBill) => (
        <>
          <h3>{myBill.title}</h3>
          <h3>{myBill.billAmount}</h3>
        </>
      ))}
      <button>asd</button>
    </div>
  );
}
