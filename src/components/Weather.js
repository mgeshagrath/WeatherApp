import Heading from './ui/Heading';
import Card from '../components/ui/Card';
import './Weather.scss';
import Flex from './ui/Flex';
import getImgByKey from './ui/imgs/imgs';

const Weather = ({ data }) => {
  const { minTemp, maxTemp, type, date } = data;
  const weatherImg = type ? type.split(' ').join('').toLowerCase() : '';

  return (
    <Card className="weather">
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
        <span className="weather__min">{minTemp}C</span>
        <span className="weather__max">{maxTemp}C</span>
      </Flex>
    </Card>
  );
};

export default Weather;
