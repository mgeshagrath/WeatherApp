import Grid from './ui/Grid';
import Weather from './Weather';

import './NextDays.scss';

const NextDays = () => {
  return (
    <Grid className="next-days">
      <Weather />
      <Weather />
      <Weather />
      <Weather />
      <Weather />
      <Weather />
    </Grid>
  );
};

export default NextDays;
