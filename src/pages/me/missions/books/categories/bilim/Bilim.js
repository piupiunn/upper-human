import React from "react";
import Book from "../../../../../../components/book-box/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
} from "../../../../../../bookLinks";

//style
import "./Bilim.css";

export default function Bilim({ addMissions }) {
  return (
    <div className="bilim">
      <Book
        name={"Türlerin Kökeni"}
        imageSource={bookLinks.DarwinEvrim}
        author={"Charles Darwin - Alfa Bilim"}
        searchLink={searchLinks.DarwinEvrim}
        youtubeLink={youtubeLinks.DarwinErvim}
        addMissions={addMissions}
      />
      <Book
        name={"İnsanın Türeyişi"}
        imageSource={bookLinks.DarwinTureyis}
        author={"Charles Darwin - Alfa Bilim"}
        searchLink={searchLinks.DarwinTureyis}
        youtubeLink={youtubeLinks.DarwinTureyis}
        addMissions={addMissions}
      />
      <Book
        name={"Son Moda Saçmalar"}
        imageSource={bookLinks.AlanSacmalar}
        author={"Alan Sokal - Alfa Bilim"}
        searchLink={searchLinks.AlanSacmalar}
        noYoutube
        addMissions={addMissions}
      />
    </div>
  );
}
