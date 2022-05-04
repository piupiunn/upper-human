import React from "react";
import Mission from "../../../../components/mission/Mission";
//style
import "./Habits.css";
export default function Habits({ addMyHabits, habit }) {
  return (
    <div>
      <Mission
        description={"İşlevsel bir kitaptan 25 sayfa oku spor salonuna git"}
        addMyHabits={addMyHabits}
        habit
      />
    </div>
  );
}
