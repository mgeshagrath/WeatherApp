import { Fragment } from 'react';
import './CurrentLocation.scss';
import Flex from './ui/Flex';
import { LocationIcon } from './ui/icons/Icons';

const CurrentLocation = () => {
  return (
    <Fragment>
      <div className="current-location__date">
        <span>Today</span>
        <span>-</span>
        <span>Fri, 5 Jun</span>
      </div>
      <Flex className="current-location__location">
        <LocationIcon />
        <span>Helsinki</span>
      </Flex>
    </Fragment>
  );
};

export default CurrentLocation;
