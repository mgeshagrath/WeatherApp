import { useReducer } from 'react';
import { context } from './weather-context';

const INITIAL_STATE = {
  location: { city: '', country: '', language: '' },
  currentWeather: {},
  nextWeather: [],
  geo: {},
  // isLoading: false,
  // hasError: false,
  // allowed: false
};

const reducer = (state, action) => {
  const { data, type } = action;

  if (type === 'GET') {
    return {
      ...state,
      location: data.userData,
      currentWeather: data.weatherData[0],
      nextWeather: data.weatherData.slice(1),
    };
  }

  if (type === 'GEO') {
    // const { lat, long, error } = data;

    // console.log(data);
    return {
      ...state,
      geo: data,
      // latlong: { lat, long },
      // error,
    };
  }

  // if (type === 'ERROR') {
  //   return {
  //     ...state,
  //     hasError: { hasError: data.hasError, error: data.error },
  //   };
  // }

  // if (type === 'LOADING') {
  //   return {
  //     ...state,
  //     isLoading: !state.isLoading,
  //   };
  // }
};

const WeatherProvider = ({ children }) => {
  const [userWeather, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { geo } = userWeather;

  const getUserWeatherHandler = (userData, weatherData) => {
    dispatch({
      type: 'GET',
      data: { userData, weatherData },
    });
  };

  const getGeolocationHandler = geoData => {
    dispatch({
      type: 'GEO',
      data: geoData,
    });
  };

  if (Object.keys(geo).length === 0 && !geo.error) {
    navigator.geolocation.getCurrentPosition(
      position =>
        getGeolocationHandler({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          error: null,
        }),
      error =>
        getGeolocationHandler({
          lat: null,
          long: null,
          error: error.message,
        })
    );
  }

  // const setGeolocationErrorHandler = error => {
  //   dispatch({
  //     type: 'GEOERROR',
  //     data: error,
  //   });
  // };

  // const errorHandler = errorData => {
  //   dispatch({
  //     type: 'ERROR',
  //     data: errorData,
  //   });
  // };

  // const loadingHandler = loadingData => {
  //   dispatch({
  //     type: 'LOADING',
  //     data: loadingData,
  //   });
  // };

  // navigator.geolocation.getCurrentPosition(position =>
  //   getGeolocationHandler({
  //     lat: position.coords.latitude,
  //     long: position.coords.longitude,
  //     allowed: true,
  //   })
  // );

  return (
    <context.Provider
      value={{
        data: userWeather,
        getUserWeather: getUserWeatherHandler,
        getGeolocation: getGeolocationHandler,
        // setGeolocationError: setGeolocationErrorHandler,
        // setError: errorHandler,
        // setLoading: loadingHandler,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default WeatherProvider;
