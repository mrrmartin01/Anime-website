import React from "react";
import "./header.css";
import NavListItems from "../components/NavListItems";
import navListData from "../data/navListData";
import Search from "../components/Search";
import Button from "../components/Button";

function Header() {
  return (
    <header>
      <a href="./" className="logo">
        {" "}
        AnimeHub
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItems key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search />
      <Button
        icon={<ion-icon name="Log-in-outline"></ion-icon>}
        name="Sign in"
      />
    </header>
  );
}

export default Header;
