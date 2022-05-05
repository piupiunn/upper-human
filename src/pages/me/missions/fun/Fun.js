import React from "react";
import Mission from "../../../../components/mission/Mission";
//
import styled from "styled-components";
import { BookClock } from "@styled-icons/fluentui-system-filled/BookClock";
//style
import "./Fun.css";
export default function Fun({ addMissions }) {
  return (
    <div>
      <Mission
        description={"İşlevsel bir kitaptan 25 sayfa oku spor salonuna git"}
        addMissions={addMissions}
        point={10}
        missionIcon={<BookTimeIcon />}
        fun
      />
      <Mission
        description={"açıklama2"}
        addMissions={addMissions}
        point={20}
        fun
      />
    </div>
  );
}

const BookTimeIcon = styled(BookClock)``;
