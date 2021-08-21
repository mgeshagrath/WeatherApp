import { useContext } from 'react';
import { context } from '../store/weather-context';
import { GpsIcon } from './ui/icons/Icons';
import Button from './ui/Button';
import Card from './ui/Card';
import './UserCta.scss';

const UserCta = ({ onSearch }) => {
  const { getGeolocation, data } = useContext(context);
  const { userLocation } = data;

  // const displaySearchHandler = () => ;

  return (
    <Card className="flex user-cta">
      <Button onClick={() => onSearch(displayed => !displayed)} className="user-cta__search-btn">
        Search for places
      </Button>
      <Button onClick={getGeolocation.bind(null, userLocation)} className="user-cta__location-btn">
        <GpsIcon />
      </Button>
    </Card>
  );
};

export default UserCta;
