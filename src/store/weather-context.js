import { createContext } from 'react';

export const context = createContext({
  location: { city: '', country: '', language: '' },
  currentWeather: [],
  nextWeather: [],
  geo: {},
  measurement: '°C',
  theme: 'N',
  userLocation: {},
  // geoError: '',
  // hasError: {},
  // isLoading: false,
  getGeolocation: (lat, long) => {},
  getUserWeather: weather => {},
  // gradesFar: () => {},
  // gradesCer: () => {},
  toggleMeasurement : () =>{},
  setTheme: () => {},
  setUserLocation: () => {}

  // setGeolocationError: error => {},
  // setError: errorData => {},
  // setLoading: loadingData => {},
});
