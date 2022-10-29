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
  let itemBunTopConstructor = data.map(
    (dataItem) =>
      dataItem._id === "60666c42cc7b410027a1a9b1" && (
        <ConstructorElement
          type="top"
          isLocked={true}
          text={dataItem.name}
          price={dataItem.price}
          thumbnail={dataItem.image}
        />
      )
  );

  let itemOtherConstructor = data.map(
    (dataItem) =>
      dataItem._id !== "60666c42cc7b410027a1a9b1" && (
        <div className={s.itemOtherConstructor}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={dataItem.name}
            price={dataItem.price}
            thumbnail={dataItem.image}
          />
        </div>
      )
  );
  let itemBunButtonConstructor = data.map(
    (dataItem) =>
      dataItem._id === "60666c42cc7b410027a1a9b1" && (
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={dataItem.name}
          price={dataItem.price}
          thumbnail={dataItem.image}
        />
      )
  );

  return (
    <section className={s.burgerConstructor}>
      <div className={s.burgerComponent}>
        {itemBunTopConstructor}
        <div className={s.scrollStyle}>{itemOtherConstructor}</div>
        {itemBunButtonConstructor}
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
