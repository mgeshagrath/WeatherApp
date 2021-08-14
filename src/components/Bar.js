import Card from './ui/Card';
import './Bar.scss';

const Bar = ({ data }) => {
  const { humidity } = data;
  return (
    <Card className="flex bar">
      <Card className="flex bar__information">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </Card>
      <div className="bar__full">
        <span className="bar__fill" style={{ width: `${humidity}%` }} />
      </div>
      <span className="bar__perc">%</span>
    </Card>
  );
};

export default Bar;
