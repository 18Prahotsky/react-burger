import s from "./OrderDetails.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import doneImage from '../../images/done.png'


const OrderDetails = ({ number }) => {
  return (
    <div className={s.content}>
      <p className={`${s.digits} text text_type_digits-large mt-4`}>
        {number()}
      </p>
      <p className={`${s.title} text text_type_main-medium mt-8`}>
        индентификатор заказа
      </p>
      <img src={doneImage} className={`${s.image}`} alt='done' />
      <p className={`${s.start} text text_type_main-default mt-15`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${s.wait} text text_type_main-default text_color_inactive mt-2 mb-30`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;

OrderDetails.propTypes = {
  number: PropTypes.func.isRequired,
};
