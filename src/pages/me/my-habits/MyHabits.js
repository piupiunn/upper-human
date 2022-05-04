import React from "react";
//style
import "./MyHabits.css";
export default function MyHabits({ myHabits }) {
  return (
    <div className="my-habit-box">
      {myHabits.map((myHabits) => (
        <div className="my-habit-box-inside">
          <h3>{myHabits.description}</h3>
        </div>
      ))}
    </div>
  );
}
