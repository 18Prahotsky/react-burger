import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";
import "@ya.praktikum/react-developer-burger-ui-components";
import s from "./NavigationPanel.module.css";
import Button from "../Button/Button";
import { useState } from "react";

const TABS = {
  constructor: "CONSTRUCTOR",
  orderList: "ORDER_LIST",
  profile: "PROFILE",
};

const NavigationPanel = () => {
  const [activeTab, setActiveTab] = useState(TABS.constructor);

  const onTabChange = (e) => {
    setActiveTab(e.currentTarget.dataset.value);
  };

  return (
    <nav className={s.nav}>
      <div className={s.twoButtons}>
        <Button
          value={TABS.constructor}
          name={"Конструктор"}
          onClick={onTabChange}
        >
          <BurgerIcon
            type={activeTab === TABS.constructor ? "primary" : "secondary"}
          />
        </Button>
        <Button
          value={TABS.orderList}
          name={"Лента заказов"}
          onClick={onTabChange}
        >
          <ListIcon
            type={activeTab === TABS.orderList ? "primary" : "secondary"}
          />
        </Button>
      </div>
      <a href="#" className={s.logo}>
        <Logo />
      </a>
      <div className={s.button}>
        <Button
          name={"Личный кабинет"}
          value={TABS.profile}
          onClick={onTabChange}
        >
          <ProfileIcon
            type={activeTab === TABS.profile ? "primary" : "secondary"}
          />
        </Button>
      </div>
    </nav>
  );
};

export default NavigationPanel;
