import s from "./Button.module.css";
import PropTypes from "prop-types";
import "@ya.praktikum/react-developer-burger-ui-components";

const Button = (props) => {
  return (
    <a href="#">
      <div className="mt-4 mb-4">
        <button className={s.button}>
          <div className={`${s.icon} ml-5 mr-2`}>{props.icon}</div>
          <p
            className={`${s.name} mr-5 text text_type_main-default text_color_inactive`}
          >
            {props.name}
          </p>
        </button>
      </div>
    </a>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Button;
