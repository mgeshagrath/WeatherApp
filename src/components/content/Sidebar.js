import { useContext, useState } from 'react';
import { context } from '../../store/weather-context';
import Card from '../ui/Card';
import CurrentLocation from '../CurrentLocation';
import CurrentWeather from '../CurrentWeather';
import UserCta from '../UserCta';
import './Sidebar.scss';
import DayBar from '../DayBar';
import SearchBar from '../SearchBar';

const Sidebar = () => {
  const [displaySearch, setDisplaySearch] = useState(false);
  // const { data } = useContext(context);
  // const { location, currentWeather, measurement } = data;
  // const { temp, type, date } = currentWeather;
  

  return (
    <Card className="card sidebar">
      {!displaySearch && <DayBar onSearch={setDisplaySearch}/>}
      {displaySearch && <SearchBar onSearch={setDisplaySearch} />}
      {/* <UserCta />
      <CurrentWeather data={{ temp, type, measurement }} />
      <CurrentLocation data={{ location, date }} /> */}
    </Card>
  );
};

export default Sidebar;
