import { Fragment, useContext, useEffect } from 'react';
import './App.scss';

import Content from './components/content/Content';

import Sidebar from './components/content/Sidebar';
import { context } from './store/weather-context';

const App = () => {
  const { getUserWeather, getGeolocation, data } = useContext(context);
  const { latlong } = data;
  const { lat, long } = latlong;

  navigator.geolocation.getCurrentPosition(position =>
    getGeolocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    })
  );

  useEffect(() => {
    const weatherCall = async () => {
      const proxy = 'https://api.allorigins.win/raw?url=';

      const response = await fetch(
        `${proxy}https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`
      );

      const data = await response.json();

      const { woeid } = data[0];

      const newResponse = await fetch(
        `${proxy}https://www.metaweather.com/api/location/${woeid}/`
      );

      const {
        consolidated_weather: weather,
        title: city,
        parent: country,
      } = await newResponse.json();

      const weatherData = weather.map(day => {
        return {
          windSpeed: Math.round(day.wind_speed * 1.609344),
          windDirection: Math.floor(day.wind_direction),
          windDirectionComp: day.wind_direction_compass,
          humidity: Math.floor(day.humidity),
          visibility: (day.visibility * 1.609344).toFixed(1),
          airPressure: Math.floor(day.air_pressure),
          temp: Math.floor(day.the_temp),
          maxTemp: Math.floor(day.max_temp),
          minTemp: Math.floor(day.min_temp),
          type: day.weather_state_name,
          date: day.applicable_date,
        };
      });

      const userData = {
        city,
        country: country.title,
        language: window.navigator.language,
      };

      getUserWeather(userData, weatherData);
    };

    weatherCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);

  return (
    <Fragment>
      {Object.keys(latlong).length === 0 && <p>Waiting for fetch!</p>}
      {Object.keys(latlong).length !== 0 && (
        <Fragment>
          <Sidebar />
          <Content />
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
