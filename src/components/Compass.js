import './Compass.scss';
import Flex from './ui/Flex';
import { NaviIcon } from './ui/icons/Icons';

const Compass = () => {
  return (
    <Flex className="compass">
      <Flex className="compass__navigator">
        <NaviIcon />
      </Flex>
      <span className="compass__measure">WSW</span>
    </Flex>
  );
};

export default Compass;
