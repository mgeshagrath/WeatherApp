import Card from '../ui/Card';
import NextDays from '../NextDays';
import CurrentDay from '../CurrentDay';

import './Content.scss';
import { useContext } from 'react';
import { context } from '../../store/weather-context';
import UserCta from '../UserCta';
import NavCta from '../NavCta';

const Content = () => {
  const { data } = useContext(context);
  const { currentWeather, nextWeather, measurement } = data;

  return (
    <Card className="content">
      <NavCta />
      <NextDays data={nextWeather} measure={measurement} />
      <CurrentDay data={currentWeather} />
    </Card>
  );
};

export default Content;
