import { useContext } from 'react';
import { context } from '../../store/weather-context';
import Card from '../ui/Card';
import NextDays from '../NextDays';
import NavCta from '../NavCta';
import CurrentDay from '../CurrentDay';
import './Content.scss';

const Content = () => {
  const { data } = useContext(context);
  const { currentWeather, nextWeather, measurement } = data;

  return (
    <Card className="card content">
      <NavCta />
      <NextDays data={nextWeather} measure={measurement} />
      <CurrentDay data={currentWeather} />
    </Card>
  );
};

export default Content;
