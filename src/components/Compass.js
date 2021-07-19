import './Compass.scss';
import Flex from './ui/Flex';
import { NaviIcon } from './ui/icons/Icons';

const Compass = ({ data }) => {
  // console.log(data);
  const { windDirectionComp, windDirection } = data;
  return (
    <Flex className="compass">
      <Flex className="compass__navigator">
        <NaviIcon transform={windDirection} />
      </Flex>
      <span className="compass__measure">{windDirectionComp}</span>
    </Flex>
  );
};

export default Compass;
