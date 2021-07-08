import './Button.scss';

const Button = ({ className, children, onClick, type }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
