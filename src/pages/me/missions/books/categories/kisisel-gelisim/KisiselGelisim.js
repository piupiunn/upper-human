import React from "react";
import Book from "../../../../../../components/book-box/Book";
import { bookLinks, searchLinks } from "../../../../../../bookLinks";

//style
import "./KisiselGelisim.css";

export default function KisiselGelisim({ addMissions }) {
  return (
    <div className="kisisel-gelisim">
      <Book
        name={"Aşık Olmak"}
        imageSource={bookLinks.Ayala}
        author={"Ayala M. Pines - İletişim Yayınları"}
        searchLink={searchLinks.Ayala}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Hayır Demeyi Bilmek"}
        imageSource={bookLinks.Marie}
        author={"Marrie Haddou - İletişim Yayınları"}
        searchLink={searchLinks.Marie}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Dinle Küçük Adam"}
        imageSource={bookLinks.Wilhelm}
        author={"Wilhelm Reich - Cem Yayınevi"}
        searchLink={searchLinks.Wilhelm}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Kendiyle Dost Olmak"}
        imageSource={bookLinks.Schmid}
        author={"Wilhelm Schmid - İletişim Yayınları"}
        searchLink={searchLinks.Schmid}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Beni Hiç Anlamıyorsun"}
        imageSource={bookLinks.Deborah}
        author={"Deborah Tannen - İletişim Yayınları"}
        searchLink={searchLinks.Deborah}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Mutlu Yaşam Üzerine"}
        imageSource={bookLinks.Seneca}
        author={"Seneca - İ. B. Kültür Yayınları"}
        searchLink={searchLinks.Seneca}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Zor Bir Ailede Büyümek"}
        imageSource={bookLinks.Susan}
        author={"Susan Forward - İletişim Yayınları"}
        searchLink={searchLinks.Susan}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Zor Kişiliklerle Yaşamak"}
        imageSource={bookLinks.Francois}
        author={"Christophe Andre - İletişim Yayınları"}
        searchLink={searchLinks.Francois}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Manevi Taciz"}
        imageSource={bookLinks.Hirigoyen}
        author={"Marie F. Hirigoyen - İletişim Yayınları"}
        searchLink={searchLinks.Hirigoyen}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"Dost Kazanma Sanatı"}
        imageSource={bookLinks.Dale}
        author={"Dale Carnegie - Epsilon Yayınları"}
        searchLink={searchLinks.Dale}
        noYoutube
        addMissions={addMissions}
      />
      <Book
        name={"İktidar"}
        imageSource={bookLinks.Greene}
        author={"Robert Greene -Altın Kitaplar"}
        searchLink={searchLinks.Greene}
        noYoutube
        addMissions={addMissions}
      />
    </div>
  );
}
