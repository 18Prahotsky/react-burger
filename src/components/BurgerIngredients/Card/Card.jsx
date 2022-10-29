import s from "./Card.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Card = (props) => {
  return (
    <div className={s.card}>
      <img className={s.image} src={props.data.image} alt="Logo" />
      <Counter count={1} size="default" />
      <div className={`${s.price} mb-1 mt-1`}>
        <div className={`${s.value} text text_type_main-medium`}>
          {props.data.price}
        </div>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${s.description} text text_type_main-default`}>
        {props.data.name}
      </p>
    </div>
  );
};

export default Card;
