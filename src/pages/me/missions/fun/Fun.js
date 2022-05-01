import React from "react";
import Mission from "../../../../components/mission/Mission";
//style
import "./Fun.css";
export default function Fun({ addMissions }) {
  return (
    <div>
      <Mission
        description={"İşlevsel bir kitaptan 25 sayfa oku spor salonuna git"}
        addMissions={addMissions}
        point={10}
      />
      <Mission description={"açıklama2"} addMissions={addMissions} point={20} />
    </div>
  );
}
