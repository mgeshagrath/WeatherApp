import { useReducer } from 'react';
import { context } from './weather-context';

const INITIAL_STATE = {
  location: { city: '', country: '', language: '' },
  currentWeather: {},
  nextWeather: [],
  latlong: {},
};

const reducer = (state, action) => {
  const { data } = action;

  if (action.type === 'GET') {
    return {
      ...state,
      location: data.userData,
      currentWeather: data.weatherData[0],
      nextWeather: data.weatherData.slice(1),
    };
  }

  if (action.type === 'GEO') {
    return {
      ...state,
      latlong: data,
    };
  }
};

const WeatherProvider = ({ children }) => {
  const [userWeather, dispatch] = useReducer(reducer, INITIAL_STATE);

  // navigator.geolocation.getCurrentPosition(position => ({
  //   lat: position.coords.latitude,
  //   long: position.coords.longitude,
  // }));

  const getUserWeatherHandler = (userData, weatherData) => {
    dispatch({
      type: 'GET',
      data: { userData, weatherData },
    });
  };

  const getGeolocationHandler = latlong => {
    dispatch({
      type: 'GEO',
      data: latlong,
    });
  };

  return (
    <context.Provider
      value={{
        data: userWeather,
        getUserWeather: getUserWeatherHandler,
        getGeolocation: getGeolocationHandler,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default WeatherProvider;
