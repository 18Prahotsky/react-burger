import React, { useState } from "react";
import s from "./Tabs.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = () => {
  const [current, setCurrent] = useState("buns");

  const onTabClick = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={s.tabs}>
      <Tab value="buns" active={current === "buns"} onClick={onTabClick}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={onTabClick}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === "mains"} onClick={onTabClick}>
        Начинка
      </Tab>
    </div>
  );
};

export default Tabs;
