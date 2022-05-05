import React from "react";
import Mission from "../../../../components/mission/Mission";
//style
import "./Humanity.css";
export default function Humanity({ addMissions }) {
  return (
    <div>
      <Mission
        description={"açıklama2"}
        addMissions={addMissions}
        point={20}
        humanity
      />
    </div>
  );
}
