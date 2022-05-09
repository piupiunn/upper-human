import React, { useState } from "react";
import Mission from "../../../../components/mission/Mission";
//
import styled from "styled-components";
import { BookClock } from "@styled-icons/fluentui-system-filled/BookClock";
//style
import "./Books.css";
import Bilim from "./categories/bilim/Bilim";
import Felsefe from "./categories/felsefe/Felsefe";
import Tarih from "./categories/tarih/Tarih";
import Yonetım from "./categories/yonetim/Yonetım";
import KisiselGelisim from "./categories/kisisel-gelisim/KisiselGelisim";
import Sanat from "./categories/sanat/Sanat";

export default function Books({ addMissions }) {
  const [showBilim, setShowBilim] = useState(false);
  const [showFelsefe, setShowFelsefe] = useState(false);
  const [showTarih, setShowTarih] = useState(false);
  const [showSanat, setShowSanat] = useState(false);
  const [showYonetim, setShowYonetim] = useState(false);
  const [showKisiselGelisim, setShowKisiselGelisim] = useState(false);

  return (
    <div>
      {/**Bilim */}
      <div className="categorie sections">
        <button
          onClick={() =>
            !showBilim ? setShowBilim(true) : setShowBilim(false)
          }
        >
          Bilim
        </button>
        {showBilim && <Bilim addMissions={addMissions} />}
        {showBilim && (
          <button
            onClick={() =>
              !showBilim ? setShowBilim(true) : setShowBilim(false)
            }
          >
            Bilim
          </button>
        )}
      </div>
      {/**Bilim */}

      {/**Felsefe */}
      <div className="categorie sections">
        <button
          onClick={() =>
            !showFelsefe ? setShowFelsefe(true) : setShowFelsefe(false)
          }
        >
          Felsefe
        </button>
        {showFelsefe && <Felsefe addMissions={addMissions} />}
        {showFelsefe && (
          <button
            onClick={() =>
              !showFelsefe ? setShowFelsefe(true) : setShowFelsefe(false)
            }
          >
            Felsefe
          </button>
        )}
      </div>
      {/**Felsefe */}

      {/**Tarih */}
      <div className="categorie sections">
        <button
          onClick={() =>
            !showTarih ? setShowTarih(true) : setShowTarih(false)
          }
        >
          Tarih
        </button>
        {showTarih && <Tarih addMissions={addMissions} />}
        {showTarih && (
          <button
            onClick={() =>
              !showTarih ? setShowTarih(true) : setShowTarih(false)
            }
          >
            Tarih
          </button>
        )}
      </div>
      {/**Tarih */}

      {/**Sanat */}
      <div className="categorie sections">
        <button
          onClick={() =>
            !showSanat ? setShowSanat(true) : setShowSanat(false)
          }
        >
          Sanat
        </button>
        {showSanat && <Sanat addMissions={addMissions} />}
        {showSanat && (
          <button
            onClick={() =>
              !showSanat ? setShowSanat(true) : setShowSanat(false)
            }
          >
            Sanat
          </button>
        )}
      </div>
      {/**Sanat */}

      {/**Yonetim */}
      <div className="categorie sections">
        <button
          onClick={() =>
            !showYonetim ? setShowYonetim(true) : setShowYonetim(false)
          }
        >
          Yönetim
        </button>
        {showYonetim && <Yonetım addMissions={addMissions} />}
        {showYonetim && (
          <button
            onClick={() =>
              !showYonetim ? setShowYonetim(true) : setShowYonetim(false)
            }
          >
            Yönetim
          </button>
        )}
      </div>
      {/**Yonetim */}

      {/**Kisisel Gelisim */}
      <div className="categorie sections">
        <button
          onClick={() =>
            !showKisiselGelisim
              ? setShowKisiselGelisim(true)
              : setShowKisiselGelisim(false)
          }
        >
          Kişisel Gelişim
        </button>
        {showKisiselGelisim && <KisiselGelisim addMissions={addMissions} />}
        {showKisiselGelisim && (
          <button
            onClick={() =>
              !showKisiselGelisim
                ? setShowKisiselGelisim(true)
                : setShowKisiselGelisim(false)
            }
          >
            Kişisel Gelişim
          </button>
        )}
      </div>
      {/**Kisiel Gelisim */}
    </div>
  );
}

const BookTimeIcon = styled(BookClock)``;
