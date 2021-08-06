import { createContext } from 'react';

export const context = createContext({
  location: { city: '', country: '', language: '' },
  currentWeather: [],
  nextWeather: [],
  geo: {},
  measurement: '°C',
  theme: 'N',
  // geoError: '',
  // hasError: {},
  // isLoading: false,
  getGeolocation: (lat, long) => {},
  getUserWeather: weather => {},
  gradesFar: () => {},
  gradesCer: () => {},
  setTheme: () => {}

  // setGeolocationError: error => {},
  // setError: errorData => {},
  // setLoading: loadingData => {},
});
