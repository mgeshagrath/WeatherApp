import Heading from './ui/Heading';
import NaviIcon from './ui/icons/NaviIcon';

import './Details.scss';

const Details = ({ type }) => {
  let markup;

  if (type === 'wind')
    markup = (
      <div className="details__direction">
        <span className="details__navigator">
          <NaviIcon />
        </span>
        <span className="details__display">WSW</span>
      </div>
    );

  if (type === 'bar')
    markup = (
      <div className="details__wrapper">
        <div className="details__type">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <div className="details__bar">
          <span className="details__fill" />
        </div>
        <span className="details__perc">%</span>
      </div>
    );

  return (
    <div className="details">
      <Heading type="h4" className="details__title">
        Wind status
      </Heading>
      <Heading type="h3" className="details__content">
        <span className="details__number">7 </span>
        <span className="details__mess">mph</span>
      </Heading>
      {markup}
    </div>
  );
};

export default Details;
