import s from "./BurgerIngredients.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import Tabs from "./Tabs/Tabs";
import Card from "./Card/Card";
import data from "../../utils/data";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {
  const cardsDataBun = data.filter((dataItem) => dataItem.type === "bun");
  const cardsBun = cardsDataBun.map((dataItem) => <Card data={dataItem} />);

  const cardsDataMain = data.filter((dataItem) => dataItem.type === "main");
  const cardsMain = cardsDataMain.map((dataItem) => <Card data={dataItem} />);

  const cardsDataSauce = data.filter((dataItem) => dataItem.type === "sauce");
  const cardsSauce = cardsDataSauce.map((dataItem) => <Card data={dataItem} />);

  return (
    <section className={s.burgerIngredients}>
      <h2 className={`${s.mainTitle} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <Tabs />
      <div className={s.scrollStyle}>
        <div className={s.cardsBlock}>
          <h3 className={`${s.title} text text_type_main-medium`}>Булки</h3>
          <div className={s.cards}>{cardsBun}</div>
        </div>
        <div className={s.cardsBlock}>
          <h3 className={`${s.title} text text_type_main-medium`}>Соусы</h3>
          <div className={s.cards}>{cardsSauce}</div>
        </div>
        <div className={s.cardsBlock}>
          <h3 className={`${s.title} text text_type_main-medium`}>Начинки</h3>
          <div className={s.cards}>{cardsMain}</div>
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
