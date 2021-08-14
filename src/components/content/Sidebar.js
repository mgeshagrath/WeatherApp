import { useContext } from 'react';
import { context } from '../../store/weather-context';
import Card from '../ui/Card';
import CurrentLocation from '../CurrentLocation';
import CurrentWeather from '../CurrentWeather';
import UserCta from '../UserCta';
import './Sidebar.scss';

const Sidebar = () => {
  const { data } = useContext(context);
  const { location, currentWeather, measurement } = data;
  const { temp, type, date } = currentWeather;

  return (
    <Card className="card sidebar">
      <UserCta />
      <CurrentWeather data={{ temp, type, measurement }} />
      <CurrentLocation data={{ location, date }} />
    </Card>
  );
};

export default Sidebar;
