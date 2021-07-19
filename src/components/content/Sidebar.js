import CurrentLocation from '../CurrentLocation';
import CurrentWeather from '../CurrentWeather';
import UserCta from '../UserCta';
import Card from '../ui/Card';

import './Sidebar.scss';
import { useContext } from 'react';
import { context } from '../../store/weather-context';

const Sidebar = () => {
  const { data } = useContext(context);
  const { location, currentWeather } = data;
  const { temp, type, date } = currentWeather;

  return (
    <Card className="sidebar">
      <UserCta />
      <CurrentWeather data={{ temp, type }} />
      <CurrentLocation data={{ location, date }} />
    </Card>
  );
};

export default Sidebar;
