import React, { useState } from "react";

//style
import "./MyMissions.css";
export default function MyMissions({ myMissions }) {
  const [completedMissions, setCompletedMissions] = useState([]);

  const completeMission = (myMission, e) => {
    const completedMission = {
      description: myMission.description,
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
              <>
                <h3>{myMission.description}</h3>
                <h3>{myMission.point}</h3>
              </>
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
              <input type="checkbox" checked disabled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
