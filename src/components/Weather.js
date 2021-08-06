import Heading from './ui/Heading';
import Card from '../components/ui/Card';
import './Weather.scss';
import Flex from './ui/Flex';
import getImgByKey from './ui/imgs/imgs';
import { useContext } from 'react';
import { context } from '../store/weather-context';
import { toGradesCel, toGradesFar } from '../utility';

const Weather = ({ data, className, measure }) => {
  const { minTemp, maxTemp, type, date } = data;
  const weatherImg = type ? type.split(' ').join('').toLowerCase() : '';
  const min = measure === '°F' ? toGradesFar(minTemp) : minTemp;
  const max = measure === '°F' ? toGradesFar(maxTemp) : maxTemp;

  // let min, max;

  // if (measure === 'F') {
  //   min = toGradesFar(minTemp);
  //   max = toGradesFar(maxTemp);
  // }

  return (
    <Card className={`weather ${className}`}>
      <Heading type="h4" className="weather__title">
        {date}
      </Heading>
      <div className="weather__img-box">
        <img
          src={getImgByKey(weatherImg)}
          alt={type}
          className="weather__img"
        />
      </div>
      <Flex className="weather__minmax">
        <span className="weather__min">
          {min} {measure}
        </span>
        <span className="weather__max">
          {max} {measure}
        </span>
      </Flex>
    </Card>
  );
};

export default Weather;
