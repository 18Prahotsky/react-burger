import React, { useState } from "react";
// import s from "./Tabs.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = () => {
  const [current, setCurrent] = React.useState("one");

  return (
    <div style={{ display: "flex" }}>
      <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={setCurrent}>
        Начинка
      </Tab>
    </div>
  );
};

export default Tabs;
