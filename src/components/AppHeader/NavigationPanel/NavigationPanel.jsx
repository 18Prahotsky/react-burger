import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";
import "@ya.praktikum/react-developer-burger-ui-components";
import s from "./NavigationPanel.module.css";
import Button from "../Button/Button";

const NavigationPanel = () => {
  return (
    <nav className={s.nav}>
      <div className={s.twoButtons}>
        <Button name={"Конструктор"} icon={<BurgerIcon type="secondary" />} />
        <Button name={"Лента заказов"} icon={<ListIcon type="secondary" />} />
      </div>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.button}>
        <Button
          name={"Личный кабинет"}
          icon={<ProfileIcon type="secondary" />}
        />
      </div>
    </nav>
  );
};

export default NavigationPanel;
