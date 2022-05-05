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
      <button
        className="new-missions"
        onClick={() =>
          showMissions ? setShowMissions(false) : setShowMissions(true)
        }
      >
        New Missions
      </button>
      <div className="all-missions">
        <div className="myhabits">
          <MyHabits myHabits={myHabits} />
        </div>
        {showMissions && (
          <div className="missions">
            <div>
              <Books addMissions={addMissions} />
              <button>Books</button>
            </div>

            <div>
              <Diy addMissions={addMissions} />
              <button>Diy</button>
            </div>

            <div>
              <Finance addMissions={addMissions} />
              <button>Finance</button>
            </div>

            <div>
              <FoodCooking addMissions={addMissions} />
              <button>Food-Cooking</button>
            </div>

            <div>
              <Habits habit addMyHabits={addMyHabits} />
              <button>Habits</button>
            </div>

            <div>
              <Health addMissions={addMissions} />
              <button>Health</button>
            </div>

            <div>
              <HouseHold addMissions={addMissions} />
              <button>Household</button>
            </div>

            <div>
              <Humanity addMissions={addMissions} />
              <button>Humanity</button>
            </div>

            <div>
              <Outdoor addMissions={addMissions} />
              <button>Outdoor</button>
            </div>

            <div>
              <WillPower addMissions={addMissions} />
              <button>Willpower</button>
            </div>

            <div>
              <Personal addMissions={addMissions} />
              <button>Personal</button>
            </div>

            <div>
              <Musics addMissions={addMissions} />
              <button>Musics</button>
            </div>

            <div>
              <Social addMissions={addMissions} />
              <button>Social</button>
            </div>

            <div>
              {showFun && (
                <button
                  onClick={() =>
                    showFun ? setShowfun(false) : setShowfun(true)
                  }
                >
                  Fun
                </button>
              )}
              {showFun && <Fun addMissions={addMissions} />}
              <button
                onClick={() => (showFun ? setShowfun(false) : setShowfun(true))}
              >
                Fun
              </button>
            </div>
          </div>
        )}
        <div className="my-missions">
          <MyMissions myMissions={myMissions} />
        </div>
      </div>
    </>
  );
}
