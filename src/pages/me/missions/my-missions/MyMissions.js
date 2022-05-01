import React, { useState } from "react";
//style
import "./MyMissions.css";
export default function MyMissions({ myMissions }) {
  const [completedMissions, setCompletedMissions] = useState([]);

  const completeMission = (myMission) => {
    const completedMission = {
      title: myMission.title,
    };
    addCompletedMission(completedMission);
  };

  const addCompletedMission = (completedMission) => {
    setCompletedMissions((completedMissions) => {
      return [...completedMissions, completedMission];
    });
  };

  return (
    <div>
      <div className="my-missions">
        {myMissions?.map((myMission) => (
          <>
            <>
              <h3>{myMission.title}</h3>
              <h3>{myMission.description}</h3>
              <h3>{myMission.point}</h3>
            </>
            <button onClick={() => completeMission(myMission)}>
              Complete Mission
            </button>
          </>
        ))}
      </div>
      <div className="my-skills">
        {completedMissions.map((compMissions) => (
          <h3>{compMissions.title}</h3>
        ))}
      </div>
    </div>
  );
}
