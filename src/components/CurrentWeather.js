import Card from './ui/Card';
import Heading from './ui/Heading';
import getImgByKey from './ui/imgs/imgs';
import { toGradesFar } from '../utility';
import './CurrentWeather.scss';

const CurrentWeather = ({ data }) => {
  const { temp, type, measurement } = data;
  const weatherImg = type ? type.split(' ').join('').toLowerCase() : '';
  const userTemp = measurement === '°F' ? toGradesFar(temp) : temp;

  return (
    <Card className="card current-weather">
      <Card className="flex current-weather__img">
        <img src={getImgByKey(weatherImg)} alt="Rain" />
      </Card>
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
