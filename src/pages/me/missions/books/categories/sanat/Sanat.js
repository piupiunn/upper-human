import React from "react";
import Book from "../../../../../../components/book-box/Book";
import {
  bookLinks,
  searchLinks,
  youtubeLinks,
} from "../../../../../../bookLinks";

//style
import "./Sanat.css";

export default function Sanat({ addMissions }) {
  return (
    <div className="sanat">
      <Book
        name={"Sanatın Öyküsü"}
        imageSource={bookLinks.GombrichSanatınOykusu}
        author={"E.H. Gombrich - Remzi Kitabevi"}
        searchLink={searchLinks.GombrichSanatınOykusu}
        youtubeLink={youtubeLinks.GombrichSanatınOykusu}
        addMissions={addMissions}
      />
      <Book
        name={"Görme Biçimleri"}
        imageSource={bookLinks.JohnBergerGorme}
        author={"John Berger - Metis Yayınları"}
        searchLink={searchLinks.JohnBergerGorme}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Sanatta Anlamın Görüntüsü"}
        imageSource={bookLinks.LeppertSanat}
        author={"Richard Leppert - Ayrıntı Yayınları"}
        searchLink={searchLinks.LeppertSanat}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Sanatta Bireyin Doğuşu"}
        imageSource={bookLinks.LegrosSanat}
        author={"Tzvetan Todorov - YKY"}
        searchLink={searchLinks.LegrosSanat}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Küratörlük"}
        imageSource={bookLinks.VesnaKuratorluk}
        author={"Vesna Madzoski - Koç Üni. Yayınları"}
        searchLink={searchLinks.VesnaKuratorluk}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Neden Bu Sanat?"}
        imageSource={bookLinks.BarrettCagdasSanat}
        author={"Terry Barrett - Hayalperest Kitap"}
        searchLink={searchLinks.BarrettCagdasSanat}
        youtubeLink={youtubeLinks.BarrettCagdasSanat}
        addMissions={addMissions}
      />
      <Book
        name={"Sanatı Eleştirmek"}
        imageSource={bookLinks.BarrettElestirmek}
        author={"Terry Barrett - Hayalperest Kitap"}
        searchLink={searchLinks.BarrettElestirmek}
        youtubeLink={youtubeLinks.BarrettElestirmek}
        addMissions={addMissions}
      />
      <Book
        name={"Yapıt Söküm"}
        imageSource={bookLinks.YalınAlpayYapıt}
        author={"Yalın Alpay - Destek Yayınları"}
        searchLink={searchLinks.YalınAlpayYapıt}
        noYoutube
        addMissions={addMissions}
      />
    </div>
  );
}
