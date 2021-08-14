import { useReducer } from 'react';
import { setCssProperty } from '../utility';
import { context } from './weather-context';

const INITIAL_STATE = {
  location: { city: '', country: '', language: '' },
  currentWeather: {},
  nextWeather: [],
  geo: {},
  measurement: '°C',
  theme: 'N',
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

  if (type === 'F') {
    return {
      ...state,
      measurement: '°F',
    };
  }

  if (type === 'C') {
    return {
      ...state,
      measurement: '°C',
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
      setCssProperty('--special', '#000');
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

  //   return {
  //     ...state,
  //     theme: state.theme === 'N' ? 'L' : 'N',
  //   };
  // }

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

  const gradesFarHandler = () => {
    dispatch({
      type: 'F',
    });
  };

  const gradesCerHandler = () => {
    dispatch({
      type: 'C',
    });
  };

  const setThemeHandler = () =>
    dispatch({
      type: 'THEME',
    });

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
        gradesFar: gradesFarHandler,
        gradesCer: gradesCerHandler,
        setTheme: setThemeHandler,
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
