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
      <div className="icon-box">HHHH</div>
      <div className="mission-description">{description}</div>
      <div className="point">Başarı Puanı:{point}</div>
      <button className="mission-button" onClick={addMission}>
        Add to My Missions
      </button>
    </div>
  );
}
