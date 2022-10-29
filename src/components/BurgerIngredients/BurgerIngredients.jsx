import s from "./BurgerIngredients.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import Tabs from "./Tabs/Tabs";
import Card from "./Card/Card";
import data from "../../utils/data";

const BurgerIngredients = () => {
  let cardItemBun = data.map(
    (dataItem) => dataItem.type === "bun" && <Card data={dataItem} />
  );
  let cardItemMain = data.map(
    (dataItem) => dataItem.type === "main" && <Card data={dataItem} />
  );
  let cardItemSauce = data.map(
    (dataItem) => dataItem.type === "sauce" && <Card data={dataItem} />
  );

  return (
    <section className={s.burgerIngredients}>
      <h2 className={`${s.mainTitle} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <Tabs />
      <div className={s.scrollStyle}>
        <div className={s.cardsBlock}>
          <h3 className={`${s.title} text text_type_main-medium`}>Булки</h3>
          <div className={s.cards}>{cardItemBun}</div>
        </div>
        <div className={s.cardsBlock}>
          <h3 className={`${s.title} text text_type_main-medium`}>Соусы</h3>
          <div className={s.cards}>{cardItemSauce}</div>
        </div>
        <div className={s.cardsBlock}>
          <h3 className={`${s.title} text text_type_main-medium`}>Начинки</h3>
          <div className={s.cards}>{cardItemMain}</div>
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
