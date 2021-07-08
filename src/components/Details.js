import Heading from './ui/Heading';

import './Details.scss';
import Card from './ui/Card';
import Bar from './Bar';
import Compass from './Compass';

const Details = ({ type }) => {
  const markup = type === 'bar' ? <Bar /> : <Compass />;

  return (
    <Card className="details">
      <Heading type="h4" className="details__title">
        Wind status
      </Heading>
      <Heading type="h3" className="details__content">
        <span className="details__number">7 </span>
        <span className="details__measure">mph</span>
      </Heading>
      {type && markup}
    </Card>
  );
};

export default Details;
