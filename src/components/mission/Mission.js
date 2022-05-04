import React, { useState } from "react";
//style
import "./Mission.css";

export default function Mission({
  description,
  point,
  addMissions,
  habit,
  addMyHabits,
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
      <div className="icon-box">HHHH</div>
      <div className="mission-description">{description}</div>
      <div className="point">Başarı Puanı:{point}</div>
      <button
        className="mission-button"
        onClick={habit ? addHabit : addMission}
      >
        {habit ? "Add my habits" : "Add my missions"}
      </button>
    </div>
  );
}
