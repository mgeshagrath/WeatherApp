import { useCallback, useReducer } from 'react';
import { setCssProperty } from '../utility';
import { context } from './weather-context';

const INITIAL_STATE = {
  location: { city: '', country: '', language: '' },
  currentWeather: {},
  nextWeather: [],
  geo: {},
  measurement: '°C',
  theme: 'N',
  userLocation: {},
};

const reducer = (state, action) => {
  const { data, type } = action;
console.log('rerender x2');
  if (type === 'GET') {
    return {
      ...state,
      location: data.userData,
      currentWeather: data.weatherData[0],
      nextWeather: data.weatherData.slice(1),
    };
  }

  if (type === 'GEO') {
    return {
      ...state,
      geo: data,
    };
  }

  if (type === 'MEASU') {
    if (state.measurement === '°C') {
      return {
        ...state,
        measurement: '°F',
      };
    }

    if (state.measurement === '°F') {
      return {
        ...state,
        measurement: '°C',
      };
    }
  }

  if (type === 'USER') {
    return {
      ...state,
      userLocation: data,
    };
  }

  if (type === 'THEME') {
    if (state.theme === 'N') {
      Array(6)
        .fill()
        .map((_, i) => setCssProperty(`--gray-${i + 1}`, '#fff'));
      setCssProperty('--gray-5', '#00aae4');
      setCssProperty('--blue-1', '#00aae4');
      setCssProperty('--blue-2', '#92cfe6');
      setCssProperty('--special', '#00aae4');
      return {
        ...state,
        theme: 'L',
      };
    }

    if (state.theme === 'L') {
      document.documentElement.style.setProperty('--gray-1', '#e7e7eb');
      document.documentElement.style.setProperty('--gray-2', '#a09fb1');
      document.documentElement.style.setProperty('--gray-3', '#88869d');
      document.documentElement.style.setProperty('--gray-4', '#616475');
      document.documentElement.style.setProperty('--gray-5', '#585676');
      document.documentElement.style.setProperty('--gray-6', '#6e707a');
      document.documentElement.style.setProperty('--blue-1', '#1e213a');
      document.documentElement.style.setProperty('--blue-2', '#100e1d');
      document.documentElement.style.setProperty('--special', '#e7e7eb');

      return {
        ...state,
        theme: 'N',
      };
    }
  }
};

const WeatherProvider = ({ children }) => {
  const [userWeather, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { geo, location, currentWeather, nextWeather, measurement, theme, userLocation } =
    userWeather;

console.log('rerender');
  const getUserWeatherHandler = useCallback((userData, weatherData) => {
    dispatch({
      type: 'GET',
      data: { userData, weatherData },
    });
  }, []);


  const getGeolocationHandler = geoData => {
    dispatch({
      type: 'GEO',
      data: geoData,
    });
  };

  const toggleMeasurementHandler = () =>
    dispatch({
      type: 'MEASU',
    });

  const setThemeHandler = () =>
    dispatch({
      type: 'THEME',
    });

  const setUserLocationHandler = location =>
    dispatch({
      type: 'USER',
      data: location,
    });

  if (Object.keys(geo).length === 0 && !geo.error) {
    navigator.geolocation.getCurrentPosition(
      position => {
        getGeolocationHandler({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          error: null,
        });
        setUserLocationHandler({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },

      error =>
        getGeolocationHandler({
          lat: null,
          long: null,
          error: error.message,
        })
    );
  }

  return (
    <context.Provider
      value={{
        geo,
        location,
        currentWeather,
        nextWeather,
        measurement,
        theme,
        userLocation,
        getUserWeather: getUserWeatherHandler,
        getGeolocation: getGeolocationHandler,
        toggleMeasurement: toggleMeasurementHandler,
        setTheme: setThemeHandler,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default WeatherProvider;
