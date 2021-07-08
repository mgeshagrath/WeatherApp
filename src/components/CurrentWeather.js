import './CurrentWeather.scss';
import Card from './ui/Card';
import Heading from './ui/Heading';
import heavyrain from '../assets/HeavyRain.png';
import Flex from './ui/Flex';

const CurrentWeather = () => {
  return (
    <Card className="current-weather">
      <Flex className="current-weather__img">
        <img src={heavyrain} alt="Rain" />
      </Flex>
      <Heading type="h2" className="current-weather__temp">
        <span className="current-weather__number">15</span>
        <span className="current-weather__measure">℃</span>
      </Heading>
      <Heading type="h3" className="current-weather__type">
        Shower
      </Heading>
    </Card>
  );
};

export default CurrentWeather;
