import React, { useEffect } from "react";
import { useState } from "react";
import { ReactComponent as MoonIcon } from "../../assets/images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/images/icon-sun.svg";
import { getStorage, setStorage } from "../../utils/LocalStorage";

export default function Header() {
  const [theme, setTheme] = useState(getStorage("theme") || "light");

  useEffect(() => {
    theme === "light"
      ? (document.body.id = "light")
      : (document.body.id = "dark");
  }, [theme]);

  useEffect(() => setStorage("theme", theme), [theme]);

  const onClickHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <header className="header">
      <h1 className="header__h1">Todo</h1>
      {theme === "light" ? (
        <MoonIcon onClick={onClickHandler} className="header__icon" />
      ) : (
        <SunIcon onClick={onClickHandler} className="header__icon" />
      )}
    </header>
  );
}
