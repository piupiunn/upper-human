import React, { useState } from "react";
//
import styled from "styled-components";
import { Plus } from "@styled-icons/feather/Plus";
//style
import "./Mission.css";

export default function Mission({
  description,
  point,
  addMissions,
  habit,
  addMyHabits,
  missionIcon,
  fun,
  books,
  diy,
  finance,
  food,
  habits,
  health,
  household,
  humanity,
  outdoor,
  personal,
  social,
  willpower,
  music,
}) {
  const addMission = () => {
    const mission = {
      description,
      point,
    };
    addMissions(mission);
  };
  const addHabit = () => {
    const habits = {
      description,
    };
    addMyHabits(habits);
  };

  return (
    <div className="mission-box">
      <div className="icon-box">{missionIcon}</div>
      <div className="mission-description">{description}</div>
      <div className="point">Başarı Puanı:{point}</div>
      <button
        className="mission-button "
        onClick={habit ? addHabit : addMission}
      >
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
