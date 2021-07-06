import Heading from './ui/Heading';
import weather from '../assets/HeavyCloud.png';

import './Weather.scss';

const Weather = () => {
  return (
    <div className="weather">
      <Heading type="h4" className="weather__title">
        Tomorrow
      </Heading>
      <div className="weather__img-box">
        <img src={weather} alt="weatherx" className="weather__img" />
      </div>
      <div className="weather__minmax">
        <span className="weather__min">16C</span>
        <span className="weather__max">11C</span>
      </div>
    </div>
  );
};

export default Weather;
