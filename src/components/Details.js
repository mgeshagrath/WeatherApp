import Heading from './ui/Heading';

import './Details.scss';
import Card from './ui/Card';
import Bar from './Bar';
import Compass from './Compass';
import ValueType from './ValueType';

const Details = ({ type, data }) => {
  return (
    <Card className="details">
      <Heading type="h4" className="details__title">
        {type}
      </Heading>
      <Heading type="h3" className="details__content">
        <ValueType type={type} data={data} />
      </Heading>
      {type === 'Wind Status' && <Compass data={data} />}
      {type === 'Humidity' && <Bar data={data} />}
    </Card>
  );
};

export default Details;
