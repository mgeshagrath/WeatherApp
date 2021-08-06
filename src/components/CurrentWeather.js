import './CurrentWeather.scss';
import Card from './ui/Card';
import Heading from './ui/Heading';
import Flex from './ui/Flex';
import getImgByKey from './ui/imgs/imgs';
import { toGradesFar } from '../utility';

const CurrentWeather = ({ data }) => {
  const { temp, type, measurement } = data;
  const weatherImg = type ? type.split(' ').join('').toLowerCase() : '';
  const userTemp = measurement === '°F' ? toGradesFar(temp) : temp;

  return (
    <Card className="current-weather">
      <Flex className="current-weather__img">
        <img src={getImgByKey(weatherImg)} alt="Rain" />
      </Flex>
      <Heading type="h2" className="current-weather__temp">
        <span className="current-weather__number">{userTemp}</span>
        <span className="current-weather__measure">{measurement}</span>
      </Heading>
      <Heading type="h3" className="current-weather__type">
        {type}
      </Heading>
    </Card>
  );
};

export default CurrentWeather;
