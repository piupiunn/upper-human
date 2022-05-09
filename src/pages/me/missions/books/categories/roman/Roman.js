import React from "react";
import Book from "../../../../../../components/book-box/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
} from "../../../../../../bookLinks";

//style
import "./Roman.css";

export default function Roman({ addMissions }) {
  return (
    <div className="roman">
      <Book
        name={"Swann'ların Tarafı"}
        imageSource={bookLinks.Proust}
        author={"Marcel Proust - YKY"}
        searchLink={searchLinks.Proust}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Bulantı"}
        imageSource={bookLinks.SarteBulantı}
        author={"Jean-Paul Sartre - Can Yayınları"}
        searchLink={searchLinks.SarteBulantı}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Sarsıntı"}
        imageSource={bookLinks.Bernard}
        author={"Thomas Bernhard - YKY"}
        searchLink={searchLinks.Bernard}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Karamazov Kardeşler"}
        imageSource={bookLinks.Dostoyevski}
        author={"Dostoyevski - İ. B. Kültür Yayınları"}
        searchLink={searchLinks.Dostoyevski}
        noYoutube
        addMissions={addMissions}
      />
    </div>
  );
}
