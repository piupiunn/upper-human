import React from "react";
import { Plus } from "@styled-icons/feather/Plus";
import styled from "styled-components";
//style
import "./HabitBox.css";

export default function HabitBox({
  habitDescription1,
  habitDescription2,
  habitDescription3,
  habitDescription4,
  habitDescription5,
  habitDescription6,
  habitDescription7,
  habitDescription8,
  habitDescription9,
  habitDescription10,
  addMyHabits,
  description,
}) {
  const addHabit = () => {
    const habits = {
      description,
      habitDescription1,
      habitDescription2,
      habitDescription3,
      habitDescription4,
      habitDescription5,
      habitDescription6,
      habitDescription7,
      habitDescription8,
      habitDescription9,
      habitDescription10,
    };
    addMyHabits(habits);
  };
  return (
    <div className="habit-box">
      <div className="habit-box-inside">
        {" "}
        <h3>{description}</h3>
        <h4>{habitDescription1}</h4>
        <h4>{habitDescription2}</h4>
        <h4>{habitDescription3}</h4>
        <h4>{habitDescription4}</h4>
        <h4>{habitDescription5}</h4>
        <h4>{habitDescription6}</h4>
        <h4>{habitDescription7}</h4>
        <h4>{habitDescription8}</h4>
        <h4>{habitDescription9}</h4>
        <h4>{habitDescription10}</h4>
      </div>

      <button className="mission-button " onClick={addHabit}>
        <PlusIcon />
      </button>
    </div>
  );
}
const PlusIcon = styled(Plus)`
  line {
    color: black;
  }
`;
