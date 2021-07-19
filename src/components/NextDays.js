import Grid from './ui/Grid';
import Weather from './Weather';

import './NextDays.scss';

const NextDays = ({ data }) => {
  const nextDaysMarkup = data.map(day => (
    <Weather key={Math.random()} data={day} />
  ));
  return <Grid className="next-days">{nextDaysMarkup}</Grid>;
};

export default NextDays;
