import s from "./BurgerIngredients.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import Tabs from "./Tabs/Tabs";
import Card from "./Card/Card";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/propTypes";
import { useMemo, useState } from "react";
import Modal from "../Modal/Modal";
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";

const BurgerIngredients = ({ data }) => {

  const cardsDataBun = useMemo(
    () => data.filter((dataItem) => dataItem.type === "bun"),
    [data]
  );
  const cardsDataMain = useMemo(
    () => data.filter((dataItem) => dataItem.type === "main"),
    [data]
  );
  const cardsDataSauce = useMemo(
    () => data.filter((dataItem) => dataItem.type === "sauce"),
    [data]
  );

  const [ingredientInModal, setIngredientInModal] = useState(false);
  const [itemDataInModal, setItemDataInModal] = useState(null);

  const openModal = (item) => {
    setItemDataInModal(item);
    setIngredientInModal(true);
  };

  const closeModal = () => {
    setItemDataInModal(null);
    setIngredientInModal(false);
  };

  return (
    <section className={s.burgerIngredients}>
      <h2 className={`${s.mainTitle} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <Tabs />
      <div className={s.scrollStyle}>
        <div className={s.cardsBlock} id="buns">
          <h3 className={`${s.title} text text_type_main-medium`}>Булки</h3>
          <div className={s.cards}>
            {cardsDataBun.map((dataItem) => (
              <Card
                key={dataItem._id}
                data={dataItem}
                onClickCard={openModal}
              />
            ))}
          </div>
        </div>
        <div className={s.cardsBlock} id="sauces">
          <h3 className={`${s.title} text text_type_main-medium`}>Соусы</h3>
          <div className={s.cards}>
            {cardsDataSauce.map((dataItem) => (
              <Card
                key={dataItem._id}
                data={dataItem}
                onClickCard={openModal}
              />
            ))}
          </div>
        </div>
        <div className={s.cardsBlock} id="mains">
          <h3 className={`${s.title} text text_type_main-medium`}>Начинки</h3>
          <div className={s.cards}>
            {cardsDataMain.map((dataItem) => (
              <Card
                key={dataItem._id}
                data={dataItem}
                onClickCard={openModal}
              />
            ))}
          </div>
        </div>
      </div>
      {ingredientInModal && (
        <Modal description={"Детали ингредиента"} onClose={closeModal}>
          <IngredientsDetails data={itemDataInModal} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};
