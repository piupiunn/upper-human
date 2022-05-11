import React, { useState } from "react";
//
import styled from "styled-components";
import { Plus } from "@styled-icons/feather/Plus";
//style
import "./Mission.css";

export default function Mission({
  description,

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
    };
    addMissions(mission);
  };

  return (
    <div className="mission-box">
      <div className="icon-box">{missionIcon}</div>
      <div className="mission-description">{description}</div>

      <PlusIcon className="mission-button " onClick={addMission} />
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
