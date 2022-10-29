import s from "./Button.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";

const Button = (props) => {
  return (
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
  );
};

export default Button;
