import s from "./Card.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../../utils/propTypes";

const Card = ({ data, onClickCard }) => {
  return (
    <div
      className={s.card}
      onClick={() => {
        onClickCard(data);
      }}
    >
      <img className={s.image} src={data.image} alt="Logo" />
      <Counter count={1} size="default" />
      <div className={`${s.price} mb-1 mt-1`}>
        <div className={`${s.value} text text_type_main-medium`}>
          {data.price}
        </div>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${s.description} text text_type_main-default`}>
        {data.name}
      </p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: dataPropTypes.isRequired,
  onClickCard: PropTypes.func.isRequired,
};
