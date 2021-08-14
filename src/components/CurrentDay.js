import Details from './Details';
import Heading from './ui/Heading';
import Card from './ui/Card';
import './CurrentDay.scss';

const types = ['Wind Status', 'Humidity', 'Visibility', 'Air Pressure'];

const CurrentDay = ({ data }) => {
  const detailedWeatherMarkup = types.map(type => (
    <Details key={Math.random()} data={data} type={type} />
  ));

  return (
    <Card className="grid current-day">
      <Heading className="current-day__title" type="h2">
        Today's Highlights
      </Heading>
      {detailedWeatherMarkup}
    </Card>
  );
};

export default CurrentDay;
