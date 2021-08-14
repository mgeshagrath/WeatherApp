import { useContext } from 'react';
import { context } from '../store/weather-context';
import { GpsIcon } from './ui/icons/Icons';
import Button from './ui/Button';
import Card from './ui/Card';
import './UserCta.scss';

const UserCta = () => {
  const { getGeolocation, data } = useContext(context);
  const { geo } = data;

  return (
    <Card className="flex user-cta">
      <Button className="user-cta__search-btn">Search for places</Button>
      <Button onClick={() => getGeolocation(geo)} className="user-cta__location-btn">
        <GpsIcon />
      </Button>
    </Card>
  );
};

export default UserCta;
