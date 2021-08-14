import { Fragment } from 'react';
import { LocationIcon } from './ui/icons/Icons';
import Card from './ui/Card';
import './CurrentLocation.scss';

const CurrentLocation = ({ data }) => {
  const { location, date } = data;
  const { city, country } = location;

  return (
    <Fragment>
      <div className="current-location__date">
        <span>Today</span>
        <span>-</span>
        <span>{date}</span>
      </div>
      <Card className="flex current-location__location">
        <LocationIcon />
        <span>{`${city}, ${country}`}</span>
      </Card>
    </Fragment>
  );
};

export default CurrentLocation;
