import Weather from './Weather';
import Card from './ui/Card';
import './NextDays.scss';

const NextDays = ({ data, measure }) => {
  const nextDaysMarkup = data.map((day, i) => (
    <Weather key={Math.random()} data={day} className={`weather--${i}`} measure={measure} />
  ));
  return <Card className="grid next-days">{nextDaysMarkup}</Card>;
};

export default NextDays;
