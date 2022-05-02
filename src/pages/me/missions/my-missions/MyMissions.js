import React, { useState } from "react";

//style
import "./MyMissions.css";
export default function MyMissions({ myMissions }) {
  const [completedMissions, setCompletedMissions] = useState([]);

  const completeMission = (myMission) => {
    const completedMission = {
      description: myMission.description,
    };
    addCompletedMission(completedMission);
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
              <>
                <h3>{myMission.description}</h3>
                <h3>{myMission.point}</h3>
              </>
              <button
                className="complete-mission"
                onClick={() => completeMission(myMission)}
              >
                Complete Mission
              </button>
            </div>
          ))}
        </div>
        <div>
          {completedMissions.map((compMissions) => (
            <div className="completed-missions">
              <h3>{compMissions.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
