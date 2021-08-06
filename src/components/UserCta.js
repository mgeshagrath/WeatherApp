import './UserCta.scss';
import Flex from './ui/Flex';
import Button from './ui/Button';
import { GpsIcon } from './ui/icons/Icons';
import { useContext } from 'react';
import { context } from '../store/weather-context';

const UserCta = () => {
  const { gradesFar, gradesCer, getGeolocation, data } = useContext(context);
  const { geo } = data;

  const toggleHandler = () => getGeolocation(geo);

  // console.log(geo);

  return (
    <Flex className="user-cta">
      <Button className="user-cta__search-btn">Search for places</Button>

      <Button onClick={toggleHandler} className="user-cta__location-btn">
        <GpsIcon />
      </Button>
    </Flex>
  );
};

export default UserCta;
