import Card from '../components/ui/Card';
import Heading from './ui/Heading';
import getImgByKey from './ui/imgs/imgs';
import { toGradesFar } from '../utility';
import './Weather.scss';

const Weather = ({ data, className, measure }) => {
  const { minTemp, maxTemp, type, date } = data;
  const weatherImg = type ? type.split(' ').join('').toLowerCase() : '';
  const min = measure === '°F' ? toGradesFar(minTemp) : minTemp;
  const max = measure === '°F' ? toGradesFar(maxTemp) : maxTemp;

  return (
    <Card className={`card weather ${className}`}>
      <Heading type="h4" className="weather__title">
        {date}
      </Heading>
      <div className="weather__img-box">
        <img src={getImgByKey(weatherImg)} alt={type} className="weather__img" />
      </div>
      <Card className="flex weather__minmax">
        <span className="weather__min">
          {min} {measure}
        </span>
        <span className="weather__max">
          {max} {measure}
        </span>
      </Card>
    </Card>
  );
};

export default Weather;
