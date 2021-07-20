import { createContext } from 'react';

export const context = createContext({
  location: { city: '', country: '', language: '' },
  currentWeather: [],
  nextWeather: [],
  geo: {},
  // geoError: '',
  // hasError: {},
  // isLoading: false,
  getGeolocation: (lat, long) => {},
  getUserWeather: weather => {},
  // setGeolocationError: error => {},
  // setError: errorData => {},
  // setLoading: loadingData => {},
});
