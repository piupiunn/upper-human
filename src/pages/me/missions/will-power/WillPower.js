import React from "react";
import Mission from "../../../../components/mission/Mission";

//style
import "./WillPower.css";
export default function WillPower({ addMissions }) {
  return (
    <div>
      {" "}
      <Mission
        description={"açıklama2"}
        addMissions={addMissions}
        point={20}
        willpower
      />
    </div>
  );
}
