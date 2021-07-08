import CurrentLocation from '../CurrentLocation';
import CurrentWeather from '../CurrentWeather';
import UserCta from '../UserCta';
import Card from '../ui/Card';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <Card className="sidebar">
      <UserCta />
      <CurrentWeather />
      <CurrentLocation />
    </Card>
  );
};

export default Sidebar;
