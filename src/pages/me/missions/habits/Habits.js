import React from "react";
import HabitBox from "../../../../components/habit-box/HabitBox";

//style
import "./Habits.css";
export default function Habits({ addMyHabits, habit }) {
  return (
    <>
      <HabitBox
        habitDescription1={"1) Yatağı topla"}
        habitDescription2={"2) Kahve iç"}
        habitDescription3={"3) Esneme hareketlerini yap"}
        habitDescription4={"4) Kahvaltı yap"}
        habitDescription5={"5) Dişlerini fırçala"}
        description={"Sabah Rutini"}
        addMyHabits={addMyHabits}
        habit
        habits
      />
      <HabitBox
        habitDescription1={"1) Günde 2 litre su iç"}
        description={"Su Rutini"}
        addMyHabits={addMyHabits}
        habit
        habits
      />
      <HabitBox
        habitDescription1={"1) Yatağı topla"}
        habitDescription2={"2) Kahve iç"}
        habitDescription3={"3) Esneme hareketlerini yap"}
        habitDescription4={"4) Kahvaltı yap"}
        habitDescription5={"5) Dişlerini fırçala"}
        description={"Sabah Rutini"}
        addMyHabits={addMyHabits}
        habit
        habits
      />
      <HabitBox
        habitDescription1={"1) Yatağı topla"}
        habitDescription2={"2) Kahve iç"}
        habitDescription3={"3) Esneme hareketlerini yap"}
        habitDescription4={"4) Kahvaltı yap"}
        habitDescription5={"5) Dişlerini fırçala"}
        description={"Sabah Rutini"}
        addMyHabits={addMyHabits}
        habit
        habits
      />
    </>
  );
}
