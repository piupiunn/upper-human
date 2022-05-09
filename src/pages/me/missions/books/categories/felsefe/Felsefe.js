import React from "react";
import Book from "../../../../../../components/book-box/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
} from "../../../../../../bookLinks";

//style
import "./Felsefe.css";

export default function Felsefe({ addMissions }) {
  return (
    <div className="felsefe">
      <Book
        name={"Platon"}
        imageSource={bookLinks.Platon}
        author={"Say Yayınları"}
        searchLink={searchLinks.Platon}
        youtubeLink={youtubeLinks.Platon}
        addMissions={addMissions}
      />
      <Book
        name={"Nietzsche"}
        imageSource={bookLinks.Nietzsche}
        author={"Say Yayınları"}
        searchLink={searchLinks.Nietzsche}
        youtubeLink={youtubeLinks.Nietzsche}
        addMissions={addMissions}
      />
      <Book
        name={"Sokrates"}
        imageSource={bookLinks.Sokrates}
        author={"Say Yayınları"}
        searchLink={searchLinks.Sokrates}
        youtubeLink={youtubeLinks.Sokrates}
        addMissions={addMissions}
      />
      <Book
        name={"Böyle Söyledi Zerdüşt"}
        imageSource={bookLinks.NietzscheZerdust}
        author={"F. Nietzsche - İ. B. Kültür Yayınları"}
        searchLink={searchLinks.NietzscheZerdust}
        youtubeLink={youtubeLinks.NietzscheZerdust}
        addMissions={addMissions}
      />
      <Book
        name={"İyinin ve Kötünün Ötesinde "}
        imageSource={bookLinks.NietzscheOtesinde}
        author={"Nietzsche - İ. B. Kültür Yayınları"}
        searchLink={searchLinks.NietzscheOtesinde}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Devlet"}
        imageSource={bookLinks.PlatonDevlet}
        author={"Platon - İ. B. Kültür Yayınları"}
        searchLink={searchLinks.PlatonDevlet}
        youtubeLink={youtubeLinks.PlatonDevlet}
        addMissions={addMissions}
      />
      <Book
        name={"Batı Felsefesi Tarihi 1"}
        imageSource={bookLinks.RusselSeriBir}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriBir}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Batı Felsefesi Tarihi 2"}
        imageSource={bookLinks.RusselSeriIkı}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriIkı}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Batı Felsefesi Tarihi 3"}
        imageSource={bookLinks.RusselSeriUc}
        author={"Bertrand Russell - Alfa Yayınları"}
        searchLink={searchLinks.RusselSeriUc}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Hayat Problem Çözmektir"}
        imageSource={bookLinks.Popper}
        author={"Karl Popper - Yapı Kredi Yayınları"}
        searchLink={searchLinks.Popper}
        noYoutube
        addMissions={addMissions}
      />
    </div>
  );
}
