import s from "./BurgerConstructor.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/propTypes";
import { useState } from "react";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";

const BurgerConstructor = ({ data }) => {
  const itemBunConstructor = data.find((item) => item.type === "bun");
  const itemOtherConstructor = data.filter((item) => item.type !== "bun");

  const [orderInModal, setOrderInModal] = useState(false);

  const openModal = (item) => {
    setOrderInModal(true);
  };

  const closeModal = () => {
    setOrderInModal(false);
  };

  return (
    <section className={s.burgerConstructor}>
      <div className={s.burgerComponent}>
        {
          <ConstructorElement
            type="top"
            isLocked={true}
            text={itemBunConstructor.name}
            price={itemBunConstructor.price}
            thumbnail={itemBunConstructor.image}
          />
        }
        <div className={s.scrollStyle}>
          {itemOtherConstructor.map((data) => (
            <div className={s.itemOtherConstructor} key={data._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={data.name}
                price={data.price}
                thumbnail={data.image}
              />
            </div>
          ))}
        </div>
        {
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={itemBunConstructor.name}
            price={itemBunConstructor.price}
            thumbnail={itemBunConstructor.image}
          />
        }
      </div>
      <div className={s.totalPrice}>
        <div className={s.price}>
          <p className={`${s.total} text text_type_main-large`}>200</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
      {orderInModal && (
        <Modal description={""} onClose={closeModal}>
          <OrderDetails
            number={() => {
              return Math.floor(Math.random() * 1000000);
            }}
          />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};
