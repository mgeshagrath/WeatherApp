import { createContext } from 'react';

export const context = createContext({
  location: { city: '', country: '', language: '' },
  currentWeather: [],
  nextWeather: [],
  geo: {},
  measurement: '°C',
  theme: 'N',
  userLocation: {},
  getGeolocation: (lat, long) => {},
  getUserWeather: weather => {},
  toggleMeasurement : () =>{},
  setTheme: () => {},
  setUserLocation: () => {}
});
