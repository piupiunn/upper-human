import React, { useState } from "react";
//pages
import Books from "./books/Books";
import Diy from "./d-i-y/Diy";
import Finance from "./finance/Finance";
import FoodCooking from "./food-cooking/FoodCooking";
import Fun from "./fun/Fun";
import Habits from "./habits/Habits";
import Health from "./health/Health";
import HouseHold from "./household/HouseHold";
import Humanity from "./humanity/Humanity";
import Outdoor from "./outdoor/Outdoor";
import Personal from "./personal/Personal";
import Social from "./social/Social";
import WillPower from "./will-power/WillPower";
import MyHabits from "../my-habits/MyHabits";
import Musics from "./musics/Musics";
//style
import "./Missions.css";
import MyMissions from "./my-missions/MyMissions";

export default function Missions() {
  const [showMissions, setShowMissions] = useState(false);
  const [myMissions, setMymissions] = useState([]);
  const [myHabits, setMyHabits] = useState([]);
  //
  const [showFun, setShowfun] = useState(false);
  const [showDiy, setShowdiy] = useState(false);
  const [showBooks, setShowbooks] = useState(false);
  const [showFinance, setShowfinance] = useState(false);
  const [showFood, setShowfood] = useState(false);
  const [showHabits, setShowhabits] = useState(false);
  const [showHealth, setShowhealth] = useState(false);
  const [showHousehold, setShowhousehold] = useState(false);
  const [showHumanity, setShowhumanity] = useState(false);
  const [showOutdoor, setShowoutdoor] = useState(false);
  const [showPersonal, setShowpersonal] = useState(false);
  const [showSocial, setShowsocial] = useState(false);
  const [showWillpower, setShowwillpower] = useState(false);
  const [showMusic, setShowmusic] = useState(false);
  //
  const addMissions = (mission) => {
    setMymissions((myMissions) => {
      return [...myMissions, mission];
    });
  };
  //
  const addMyHabits = (habits) => {
    setMyHabits((myHabits) => {
      return [...myHabits, habits];
    });
  };
  //
  console.log(myHabits);
  return (
    <>
      <div className="missions-navbar">
        <p className="my-habits">Alışkanlıklarım</p>
        <button
          onClick={() => setShowMissions(true)}
          className="new-mission-button"
        >
          New Missions
        </button>

        <p>Görevlerim</p>
        <p>Bitirdiğim Görevlerim</p>
      </div>
      <div className="all-missions">
        <div className="myhabits">
          <MyHabits myHabits={myHabits} />
        </div>
        {showMissions && (
          <div className="missions">
            {/**BOOKS SECTION */}
            <div>
              <button
                onClick={() =>
                  showBooks ? setShowbooks(false) : setShowbooks(true)
                }
              >
                Books
              </button>
              {showBooks && <Books addMissions={addMissions} />}

              {showBooks && (
                <button
                  onClick={() =>
                    showBooks ? setShowbooks(false) : setShowbooks(true)
                  }
                >
                  Books
                </button>
              )}
            </div>
            {/**BOOKS SECTION */}

            {/**DIY SECTION */}
            <div>
              <button
                onClick={() => (showDiy ? setShowdiy(false) : setShowdiy(true))}
              >
                Diy
              </button>
              {showDiy && <Diy addMissions={addMissions} />}

              {showDiy && (
                <button
                  onClick={() =>
                    showDiy ? setShowdiy(false) : setShowdiy(true)
                  }
                >
                  Diy
                </button>
              )}
            </div>
            {/**DIY SECTION */}

            {/**FINANCE SECTION */}
            <div>
              <button
                onClick={() =>
                  showFinance ? setShowfinance(false) : setShowfinance(true)
                }
              >
                Finance
              </button>
              {showFinance && <Finance addMissions={addMissions} />}
              {showFinance && (
                <button
                  onClick={() =>
                    showFinance ? setShowfinance(false) : setShowfinance(true)
                  }
                >
                  Finance
                </button>
              )}
            </div>
            {/**FINANCE SECTION */}

            {/**FOOD SECTION */}
            <div>
              <button
                onClick={() =>
                  showFood ? setShowfood(false) : setShowfood(true)
                }
              >
                Food
              </button>
              {showFood && <FoodCooking addMissions={addMissions} />}
              {showFood && (
                <button
                  onClick={() =>
                    showFood ? setShowfood(false) : setShowfood(true)
                  }
                >
                  Food
                </button>
              )}
            </div>
            {/**FOOD SECTION */}

            {/**HABITS SECTION */}
            <div>
              <button
                onClick={() =>
                  showHabits ? setShowhabits(false) : setShowhabits(true)
                }
              >
                Habits
              </button>
              {showHabits && <Habits habit addMyHabits={addMyHabits} />}
              {showHabits && (
                <button
                  onClick={() =>
                    showHabits ? setShowhabits(false) : setShowhabits(true)
                  }
                >
                  Habits
                </button>
              )}
            </div>
            {/**HABITS SECTION */}

            {/**HEALTH SECTION */}
            <div>
              <button
                onClick={() =>
                  showHealth ? setShowhealth(false) : setShowhealth(true)
                }
              >
                Health
              </button>
              {showHealth && <Health addMissions={addMissions} />}
              {showHealth && (
                <button
                  onClick={() =>
                    showHealth ? setShowhealth(false) : setShowhealth(true)
                  }
                >
                  Health
                </button>
              )}
            </div>
            {/**HEALTH SECTION */}

            {/**HOUSEHOLD SECTION */}
            <div>
              <button
                onClick={() =>
                  showHousehold
                    ? setShowhousehold(false)
                    : setShowhousehold(true)
                }
              >
                Household
              </button>
              {showHousehold && <HouseHold addMissions={addMissions} />}

              {showHousehold && (
                <button
                  onClick={() =>
                    showHousehold
                      ? setShowhousehold(false)
                      : setShowhousehold(true)
                  }
                >
                  Household
                </button>
              )}
            </div>
            {/**HOUSEHOLD SECTION */}

            {/**HUMANITY SECTION */}
            <div>
              <button
                onClick={() =>
                  showHumanity ? setShowhumanity(false) : setShowhumanity(true)
                }
              >
                Humanity
              </button>
              {showHumanity && <Humanity addMissions={addMissions} />}

              {showHumanity && (
                <button
                  onClick={() =>
                    showHumanity
                      ? setShowhumanity(false)
                      : setShowhumanity(true)
                  }
                >
                  Humanity
                </button>
              )}
            </div>
            {/**HUMANITY SECTION */}

            {/**OUTDOOR SECTION */}
            <div>
              <button
                onClick={() =>
                  showOutdoor ? setShowoutdoor(false) : setShowoutdoor(true)
                }
              >
                Outdoor
              </button>
              {showOutdoor && <Outdoor addMissions={addMissions} />}
              {showOutdoor && (
                <button
                  onClick={() =>
                    showOutdoor ? setShowoutdoor(false) : setShowoutdoor(true)
                  }
                >
                  Outdoor
                </button>
              )}
            </div>
            {/**OUTDOOR SECTION */}

            {/**WILLPOWER SECTION */}
            <div>
              <button
                onClick={() =>
                  showWillpower
                    ? setShowwillpower(false)
                    : setShowwillpower(true)
                }
              >
                Willpower
              </button>
              {showWillpower && <WillPower addMissions={addMissions} />}
              {showPersonal && (
                <button
                  onClick={() =>
                    showWillpower
                      ? setShowwillpower(false)
                      : setShowwillpower(true)
                  }
                >
                  Willpower
                </button>
              )}
            </div>
            {/**WILLPOWER SECTION */}

            {/**PERSONAL SECTION */}
            <div>
              <button
                onClick={() =>
                  showPersonal ? setShowpersonal(false) : setShowpersonal(true)
                }
              >
                Personal
              </button>
              {showPersonal && <Personal addMissions={addMissions} />}
              {showPersonal && (
                <button
                  onClick={() =>
                    showPersonal
                      ? setShowpersonal(false)
                      : setShowpersonal(true)
                  }
                >
                  Personal
                </button>
              )}
            </div>
            {/**PERSONAL SECTION */}

            {/**MUSIC SECTION */}
            <div>
              <button
                onClick={() =>
                  showMusic ? setShowmusic(false) : setShowmusic(true)
                }
              >
                Music
              </button>
              {showMusic && <Musics addMissions={addMissions} />}
              {showMusic && (
                <button
                  onClick={() =>
                    showMusic ? setShowmusic(false) : setShowmusic(true)
                  }
                >
                  Music
                </button>
              )}
            </div>
            {/**MUSIC SECTION */}

            {/**SOCIAL SECTION */}
            <div>
              <button
                onClick={() =>
                  showSocial ? setShowsocial(false) : setShowsocial(true)
                }
              >
                Social
              </button>

              {showSocial && <Social addMissions={addMissions} />}
              {showSocial && (
                <button
                  onClick={() =>
                    showSocial ? setShowsocial(false) : setShowsocial(true)
                  }
                >
                  Social
                </button>
              )}
            </div>
            {/**SOCIAL SECTION */}

            {/**FUN SECTION */}
            <div>
              <button
                onClick={() => (showFun ? setShowfun(false) : setShowfun(true))}
              >
                Fun
              </button>
              {showFun && <Fun addMissions={addMissions} />}
              {showFun && (
                <button
                  onClick={() =>
                    showFun ? setShowfun(false) : setShowfun(true)
                  }
                >
                  Fun
                </button>
              )}
            </div>
          </div>
        )}
        <div className="my-missions">
          <MyMissions myMissions={myMissions} />
        </div>
        {/**FUN SECTION */}
      </div>
    </>
  );
}
