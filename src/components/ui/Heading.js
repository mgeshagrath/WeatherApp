import './UiStyles.scss';

const Heading = ({ type, children, className }) => {
  if (type === 'h1') return <h1 className={`heading ${className}`}>{children}</h1>;
  if (type === 'h2') return <h2 className={`heading ${className}`}>{children}</h2>;
  if (type === 'h3') return <h3 className={`heading ${className}`}>{children}</h3>;
  if (type === 'h4') return <h4 className={`heading ${className}`}>{children}</h4>;
};

export default Heading;
