import Card from './ui/Card';
import { NaviIcon } from './ui/icons/Icons';
import './Compass.scss';

const Compass = ({ data }) => {
  const { windDirectionComp, windDirection } = data;
  return (
    <Card className="flex compass">
      <Card className="flex compass__navigator">
        <NaviIcon transform={windDirection} />
      </Card>
      <span className="compass__measure">{windDirectionComp}</span>
    </Card>
  );
};

export default Compass;
