import Details from './Details';
import Grid from './ui/Grid';
import Heading from './ui/Heading';

import './CurrentDay.scss';

const CurrentDay = ({ data }) => {
  const types = ['Wind Status', 'Humidity', 'Visibility', 'Air Pressure'];
  const detailedWeatherMarkup = types.map(type => (
    <Details key={Math.random()} data={data} type={type} />
  ));

  return (
    <Grid className="current-day">
      <Heading className="current-day__title" type="h2">
        Today's Highlights
      </Heading>

      {detailedWeatherMarkup}
      {/* <Details type="wind" />
      <Details type="bar" />
      <Details />
      <Details /> */}
    </Grid>
  );
};

export default CurrentDay;
