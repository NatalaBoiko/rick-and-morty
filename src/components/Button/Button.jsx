import "./button.css";

const Button = ({ onClick, title, type, className }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {title}
    </button>
  );
};

export default Button;
