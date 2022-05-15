import React from "react";
import { NavLink } from "react-router-dom";
//style
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="left-border" to="/income-expenses">
        <p>Gelir-Gider</p>
      </NavLink>
      <NavLink to="/missions">
        <p>Görevler</p>
      </NavLink>
      <NavLink to="/signup">
        <p>Kayıt ol</p>
      </NavLink>
      <NavLink to="/ready-go-habits">
        <p>Hazır Görevler</p>
      </NavLink>
      <NavLink to="/short-notes">
        <p>Kısa Notlar</p>
      </NavLink>
      <NavLink className="right-border" to="/login">
        <p>Giriş yap</p>
      </NavLink>
    </div>
  );
}
