import React from "react";
import Book from "../../../../../../components/book-box/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
} from "../../../../../../bookLinks";

//style
import "./Yonetım.css";

export default function Yonetım({ addMissions }) {
  return (
    <div className="yonetim">
      <Book
        style={{ marginLeft: "-8px" }}
        name={"Yönetim Üzerine İkinci İnceleme"}
        imageSource={bookLinks.JohnLockeYonetim}
        author={"John Locke - Serbest Kitaplar"}
        searchLink={searchLinks.JohnLockeYonetim}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Özgürlük Üzerine"}
        imageSource={bookLinks.JohnMillOzgurluk}
        author={"John Stuart Mill - Kutu Yayınları"}
        searchLink={searchLinks.JohnMillOzgurluk}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Toplum Sözleşmesi"}
        imageSource={bookLinks.Rousseau}
        author={"J-J Rousseau - İ. B. Kültür Yayınları"}
        searchLink={searchLinks.Rousseau}
        noYoutube
        styleButton={{ marginTop: "40px" }}
        addMissions={addMissions}
      />
      <Book
        name={"Kanunların Ruhu Üzerine"}
        imageSource={bookLinks.Montesquieu}
        author={"Montesquieu - İ. B. Kültür Yayınları"}
        searchLink={searchLinks.Montesquieu}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Yalanın Siyaseti"}
        imageSource={bookLinks.YalınAlpaySiyaset}
        author={"Destek Yayınları"}
        searchLink={searchLinks.YalınAlpaySiyaset}
        youtubeLink={youtubeLinks.YalınAlpaySiyaset}
        addMissions={addMissions}
      />
      <Book
        name={"Kitle ve İktidar"}
        imageSource={bookLinks.Elias}
        author={"Elias Canetti - Ayrıntı Yayınları"}
        searchLink={searchLinks.Elias}
        noYoutube
        addMissions={addMissions}
      />
    </div>
  );
}
