import React from "react";
import Mission from "../../../../components/mission/Mission";

//style
import "./Musics.css";

export default function Musics({ addMissions }) {
  return (
    <div>
      {" "}
      <Mission
        description={"açıklama2"}
        addMissions={addMissions}
        point={20}
        music
      />
    </div>
  );
}
