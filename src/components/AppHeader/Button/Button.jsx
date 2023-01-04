import s from "./Button.module.css";
import "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Button = ({ value, name, onClick, children }) => {
  let active =
    children.props.type === "primary"
      ? "text_color_active"
      : "text_color_inactive";

  return (
    <div className="mt-4 mb-4">
      <a
        href="#"
        className={s.button}
        id={name}
        data-value={value}
        onClick={onClick}
      >
        <div className={`${s.icon} ml-5 mr-2`}>{children}</div>
        <p className={`${s.name} mr-5 text text_type_main-default ${active}`}>
          {name}
        </p>
      </a>
    </div>
  );
};

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};