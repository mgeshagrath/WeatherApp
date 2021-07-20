import { Fragment, useContext, useEffect, useState } from 'react';
import './App.scss';

import Content from './components/content/Content';

import Sidebar from './components/content/Sidebar';
import Modal from './components/ui/Modal';
import { context } from './store/weather-context';

const App = () => {
  const { data, getUserWeather } = useContext(context);
  const [isLoading, setIsLoading] = useState(false);
  const { geo } = data;
  const { error } = geo;

  useEffect(() => {
    const weatherCall = async () => {
      setIsLoading(true);
      try {
        const { lat, long } = geo;

        const proxy = 'https://api.allorigins.win/raw?url=';

        if (!lat && !long) return;

        const response = await fetch(
          `${proxy}https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`
        );

        if (!response.ok) throw new Error('Error Fetch 1');

        const data = await response.json();

        const { woeid } = data[0];

        const newResponse = await fetch(
          `${proxy}https://www.metaweather.com/api/location/${woeid}/`
        );

        if (!newResponse.ok) throw new Error('Error fetch 2');

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
      } catch (err) {
        if (err.message === 'Unexpected end of JSON input') return;
      } finally {
        setIsLoading(false);
      }
    };

    weatherCall();
  }, [geo]);

  // if (!allowed) return <Modal data="Please, enable your location!" />;

  if (isLoading) return <Modal data="Retrieving your data <3" />;
  if (!isLoading && error)
    return <Modal data="Please, enable your location :c" />;
  if (Object.keys(geo).length === 0)
    return <Modal data="Waiting for your location :)" />;

  // if (Object.keys(latlong).length === 0 && hasError) {
  //   errorHandler({
  //     hasError: true,
  //     error: error.message,
  //   });
  // }

  return (
    <Fragment>
      <Sidebar />
      <Content />
    </Fragment>
  );
};

export default App;
