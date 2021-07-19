import { createContext } from 'react';

export const context = createContext({
  location: { city: '', country: '', language: '' },
  currentWeather: [],
  nextWeather: [],
  getGeolocation: (lat, long) => {},
  getUserWeather: weather => {},
});
