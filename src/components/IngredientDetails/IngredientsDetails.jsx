import s from "./IngredientsDetails.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import { dataPropTypes } from "../../utils/propTypes";

const IngredientsDetails = ({ data }) => {
  return (
    <div className={s.content}>
      <img src={data.image} className={`${s.image}`} alt={data.name} />
      <p className={`${s.title} text text_type_main-medium mt-4`}>
        {data.name}
      </p>
      <div className={`${s.foodValues} mt-8 mb-15`}>
        <div className={s.foodvalue}>
          <p className={`text text_type_main-small text_color_inactive`}>
            Калории, ккал
          </p>
          <p className="text text_type_digits-default mt-2 text_color_inactive">
            {data.calories}
          </p>
        </div>
        <div className={s.foodvalue}>
          <p className={`text text_type_main-small text_color_inactive`}>
            Белки, г
          </p>
          <p className="text text_type_digits-default mt-2 text_color_inactive">
            {data.proteins}
          </p>
        </div>
        <div className={s.foodvalue}>
          <p className={`text text_type_main-small text_color_inactive`}>
            Жиры, г
          </p>
          <p className="text text_type_digits-default mt-2 text_color_inactive">
            {data.fat}
          </p>
        </div>
        <div className={s.foodvalue}>
          <p className={`text text_type_main-small text_color_inactive`}>
            Углеводы, г
          </p>
          <p className="text text_type_digits-default mt-2 text_color_inactive">
            {data.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IngredientsDetails;

IngredientsDetails.propTypes = {
  data: dataPropTypes.isRequired,
};
