import React, { useState } from "react";
//
import styled from "styled-components";
import { Plus } from "@styled-icons/feather/Plus";
//style
import "./Mission.css";

export default function Mission({
  description,
  point,
  addMissions,
  habit,
  addMyHabits,
  missionIcon,
  fun,
  books,
  diy,
  finance,
  food,
  habits,
  health,
  household,
  humanity,
  outdoor,
  personal,
  social,
  willpower,
  music,
}) {
  const addMission = () => {
    const mission = {
      description,
      point,
    };
    addMissions(mission);
  };
  const addHabit = () => {
    const habits = {
      description,
    };
    addMyHabits(habits);
  };

  return (
    <div className="mission-box">
      <div className="icon-box">{missionIcon}</div>
      <div className="mission-description">{description}</div>
      <div className="point">Başarı Puanı:{point}</div>
      {books ? (
        <div class="book" onClick={habit ? addHabit : addMission}>
          <div class="book-square">+</div>
          <div class="book-square"></div>
          <div class="book-square"></div>
          <div class="book-square"></div>
          <div class="book-square"></div>
          <div class="book-square"></div>
          <div class="book-square"></div>
        </div>
      ) : habits ? (
        <div class="habits-spinner">
          <svg
            onClick={habit ? addHabit : addMission}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
          >
            <path
              stroke="#E91E63"
              stroke-width="1.5"
              d="M9.743 10.25c3.213 1.96 5.017 4.676 7.248 4.676 2.588 0 2.791-4.8.518-5.668-3.107-1.187-5.178 3.719-8.284 5.03-1.415.677-3.41 1.014-4.09-1.14-.251-.797-.13-1.65.133-2.442v0c.425-1.278 2.132-1.66 3.35-1.081.304.144.668.346 1.125.625z"
              stroke-dashoffset="100"
              stroke-dasharray="100"
              class="path"
            ></path>
          </svg>
        </div>
      ) : humanity ? (
        <div class="love" onClick={habit ? addHabit : addMission}>
          <input id="switch" type="checkbox" />
          <label class="love-heart" for="switch">
            <i class="left"></i>
            <i class="right"></i>
            <i class="bottom"></i>
            <div class="round"></div>
          </label>
        </div>
      ) : music ? (
        <button className="music-button">
          <span></span>
          <div class="line"></div>
          <div class="line-2"></div>
          <div class="speak"></div>
          <div class="speak one"></div>
          <div class="speak two"></div>
          <div class="speak three"></div>
        </button>
      ) : willpower ? (
        <a class="btn-slice" href="#">
          <div class="top">
            <span>İradesizlik</span>
          </div>
          <div class="bottom">
            <span>İradesizlik</span>
          </div>
        </a>
      ) : (
        <button
          className={`mission-button ${
            fun
              ? "fun-button"
              : diy
              ? "diy-button"
              : finance
              ? "finance- button"
              : food
              ? "food-button"
              : health
              ? "health-button"
              : household
              ? "household-button"
              : humanity
              ? "humanity-button"
              : outdoor
              ? "outdoor-button"
              : personal
              ? "personal-button"
              : social
              ? "social-button"
              : ""
          }`}
          onClick={habit ? addHabit : addMission}
        >
          <PlusIcon />
        </button>
      )}
    </div>
  );
}

const PlusIcon = styled(Plus)`
  line {
    color: black;
  }
`;
