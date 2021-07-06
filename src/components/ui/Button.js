import './Button.scss';

const Button = ({ className, children, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
