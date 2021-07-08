import Heading from './ui/Heading';
import weather from '../assets/HeavyCloud.png';
import Card from '../components/ui/Card';
import './Weather.scss';
import Flex from './ui/Flex';

const Weather = () => {
  return (
    <Card className="weather">
      <Heading type="h4" className="weather__title">
        Tomorrow
      </Heading>
      <div className="weather__img-box">
        <img src={weather} alt="weatherx" className="weather__img" />
      </div>
      <Flex className="weather__minmax">
        <span className="weather__min">16C</span>
        <span className="weather__max">11C</span>
      </Flex>
    </Card>
  );
};

export default Weather;
