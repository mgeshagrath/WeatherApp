import './Button.scss';

const Button = ({ className, children, onClick, type, disabled }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
