import { Fragment } from 'react';
import './CurrentLocation.scss';
import Flex from './ui/Flex';
import { LocationIcon } from './ui/icons/Icons';

const CurrentLocation = ({ data }) => {
  const { location, date } = data;
  const { city, country } = location;

  return (
    <Fragment>
      <div className="current-location__date">
        <span>Today</span>
        <span>-</span>
        {/* <span>Fri, 5 Jun</span> */}
        <span>{date}</span>
      </div>
      <Flex className="current-location__location">
        <LocationIcon />
        <span>{`${city}, ${country}`}</span>
      </Flex>
    </Fragment>
  );
};

export default CurrentLocation;
