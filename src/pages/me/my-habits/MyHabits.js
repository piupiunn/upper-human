import React from "react";
//style
import "./MyHabits.css";
export default function MyHabits({ myHabits }) {
  return (
    <div className="my-habit-box">
      {myHabits.map((myHabits) => (
        <div className="my-habit-box-inside">
          <h3>{myHabits.description}</h3>
          <h4>{myHabits.habitDescription1}</h4>
          <h4>{myHabits.habitDescription2}</h4>
          <h4>{myHabits.habitDescription3}</h4>
          <h4>{myHabits.habitDescription4}</h4>
          <h4>{myHabits.habitDescription5}</h4>
          <h4>{myHabits.habitDescription6}</h4>
          <h4>{myHabits.habitDescription7}</h4>
          <h4>{myHabits.habitDescription8}</h4>
          <h4>{myHabits.habitDescription9}</h4>
          <h4>{myHabits.habitDescription10}</h4>
        </div>
      ))}
    </div>
  );
}
