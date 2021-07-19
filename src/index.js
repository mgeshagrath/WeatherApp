import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import WeatherProvider from './store/weather-provider';

ReactDOM.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
  document.getElementById('root')
);
