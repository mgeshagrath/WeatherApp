import './Bar.scss';
import Flex from './ui/Flex';

const Bar = () => {
  return (
    <Flex className="bar">
      <Flex className="bar__information">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </Flex>
      <div className="bar__full">
        <span className="bar__fill" />
      </div>
      <span className="bar__perc">%</span>
    </Flex>
  );
};

export default Bar;
