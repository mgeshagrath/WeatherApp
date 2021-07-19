import Card from '../ui/Card';
import NextDays from '../NextDays';
import CurrentDay from '../CurrentDay';

import './Content.scss';
import { useContext } from 'react';
import { context } from '../../store/weather-context';

const Content = () => {
  const { data } = useContext(context);
  const { currentWeather, nextWeather } = data;

  return (
    <Card className="content">
      <NextDays data={nextWeather} />
      <CurrentDay data={currentWeather} />
    </Card>
  );
};

export default Content;
