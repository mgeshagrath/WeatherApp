import { Fragment, useContext } from 'react';
import { context } from '../store/weather-context';
import CurrentLocation from './CurrentLocation';
import CurrentWeather from './CurrentWeather';
import UserCta from './UserCta';

const DayBar = ({onSearch}) => {
  const { location, currentWeather, measurement } = useContext(context);
  const { temp, type, date } = currentWeather;

  return (
    <Fragment>
      <UserCta  onSearch={onSearch}/>
      <CurrentWeather data={{ temp, type, measurement }} />
      <CurrentLocation data={{ location, date }} />
    </Fragment>
  );
};
export default DayBar;
