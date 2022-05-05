import React from "react";
import Mission from "../../../../components/mission/Mission";
//
import styled from "styled-components";
import { BookClock } from "@styled-icons/fluentui-system-filled/BookClock";
//style
import "./Books.css";

export default function Books({ addMissions }) {
  return (
    <div>
      <Mission
        description={"İşlevsel bir kitaptan 25 sayfa oku spor salonuna git"}
        addMissions={addMissions}
        point={10}
        missionIcon={<BookTimeIcon />}
        books
      />
    </div>
  );
}

const BookTimeIcon = styled(BookClock)``;
