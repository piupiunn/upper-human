import React, { useState } from "react";
//style
import "./Mission.css";

export default function Mission({ description, point, addMissions }) {
  const addMission = () => {
    const mission = {
      description,
      point,
    };
    addMissions(mission);
  };

  return (
    <div className="mission-box">
      <p className="mission-description">HH {description}</p>
      <p className="point">Başarı Puanı:{point}</p>
      <button className="mission-button" onClick={addMission}>
        Add to My Missions
      </button>
    </div>
  );
}
