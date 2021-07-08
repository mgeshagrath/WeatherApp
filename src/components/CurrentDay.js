import Details from './Details';
import Grid from './ui/Grid';
import Heading from './ui/Heading';

import './CurrentDay.scss';

const CurrentDay = () => {
  return (
    <Grid className="current-day">
      <Heading className="current-day__title" type="h2">
        Today's Highlights
      </Heading>
      <Details type="wind" />
      <Details type="bar" />
      <Details />
      <Details />
    </Grid>
  );
};

export default CurrentDay;
