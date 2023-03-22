import "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick, title, type, className }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
