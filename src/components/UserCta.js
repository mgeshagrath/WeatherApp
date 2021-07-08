import './UserCta.scss';
import Flex from './ui/Flex';
import Button from './ui/Button';
import { GpsIcon } from './ui/icons/Icons';

const UserCta = () => {
  return (
    <Flex className="user-cta">
      <Button className="user-cta__search-btn">Search for places</Button>
      <Button className="user-cta__location-btn">
        <GpsIcon />
      </Button>
    </Flex>
  );
};

export default UserCta;
