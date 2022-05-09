import React from "react";
import HabitBox from "../../../../components/habit-box/HabitBox";

//style
import "./Habits.css";
export default function Habits({ addMyHabits, habit }) {
  return (
    <>
      <HabitBox
        habitDescription1={"1) Yatağı topla"}
        habitDescription2={"2) Yüzünü yıka"}
        habitDescription3={"3) Yüzünü yıka"}
        habitDescription4={"4) Yüzünü yıka"}
        description={"Sabah Rutini"}
        addMyHabits={addMyHabits}
        habit
        habits
      />
    </>
  );
}
