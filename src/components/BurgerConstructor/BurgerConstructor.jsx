import s from "./BurgerConstructor.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import data from "../../utils/data";

const BurgerConstructor = () => {
  const itemBunConstructor = data.find((item) => item.type === "bun");
  const itemMainConstructor = data.filter((item) => item.type !== "bun");

  const itemBunTopConstructor = (data) => {
    return (
      <ConstructorElement
        type="top"
        isLocked={true}
        text={data.name}
        price={data.price}
        thumbnail={data.image}
      />
    );
  };

  const itemBunBottomConstructor = (data) => {
    return (
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={data.name}
        price={data.price}
        thumbnail={data.image}
      />
    );
  };

  const itemOtherConstructor = (data) => {
    return (
      <div className={s.itemOtherConstructor}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={data.name}
          price={data.price}
          thumbnail={data.image}
        />
      </div>
    );
  };

  const itemsMainConstructor = itemMainConstructor.map((item) =>
    itemOtherConstructor(item)
  );

  return (
    <section className={s.burgerConstructor}>
      <div className={s.burgerComponent}>
        {itemBunTopConstructor(itemBunConstructor)}
        <div className={s.scrollStyle}>{itemsMainConstructor}</div>
        {itemBunBottomConstructor(itemBunConstructor)}
      </div>
      <div className={s.totalPrice}>
        <div className={s.price}>
          <p className={`${s.total} text text_type_main-large`}>200</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
