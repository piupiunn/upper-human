import React, { useState } from "react";

//style
import "./MyMissions.css";
export default function MyMissions({ myMissions }) {
  const [completedMissions, setCompletedMissions] = useState([]);

  const completeMission = (myMission, e) => {
    const completedMission = {
      description: myMission.description,
      name: myMission.name,
    };
    addCompletedMission(completedMission);
    e.target.parentNode.style.display = "none";
  };

  const addCompletedMission = (completedMission) => {
    setCompletedMissions((completedMissions) => {
      return [...completedMissions, completedMission];
    });
  };

  return (
    <>
      <div className="my-missions-box">
        <div>
          {myMissions?.map((myMission) => (
            <div className="my-missions-box-inside">
              <div className="animation-and-description">
                <img className="mymission-icon" src="/img/flag.png" alt="" />
                <h3>{myMission.description}</h3>
                <h3>{myMission.name}</h3>
              </div>
              <input
                type="checkbox"
                className="complete-mission"
                onClick={(e) => completeMission(myMission, e)}
              />
            </div>
          ))}
        </div>
        <div>
          {completedMissions.map((compMissions) => (
            <div className="completed-missions">
              <h3>{compMissions.description}</h3>
              <h3>
                {compMissions.name} {compMissions.name && "oku"}
              </h3>
              <img className="trophy-icon" src="/img/medal.png" alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
