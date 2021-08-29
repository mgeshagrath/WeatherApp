export const WEATHER_API = 'https://www.metaweather.com/api/';

export const PROXY = 'https://api.allorigins.win/raw?url=';

export const MILESTOKM = 1.609344;

export const toGradesFar = grades => Math.floor(grades * (9 / 5) + 32);

export const toGradesCel = grades => (grades - 32) * (5 / 9);

export const setCssProperty = (vary, value) =>
  document.documentElement.style.setProperty(`${vary}`, `${value}`);

export const checkCurrentSelection = (value, condition) => (value === condition ? 'auto' : 'unset');

export const transformDayData = dayObj => ({
  windSpeed: Math.round(dayObj.wind_speed * MILESTOKM),
  windDirection: Math.floor(dayObj.wind_direction),
  windDirectionComp: dayObj.wind_direction_compass,
  humidity: Math.floor(dayObj.humidity),
  visibility: (dayObj.visibility * MILESTOKM).toFixed(1),
  airPressure: Math.floor(dayObj.air_pressure),
  temp: Math.floor(dayObj.the_temp),
  maxTemp: Math.floor(dayObj.max_temp),
  minTemp: Math.floor(dayObj.min_temp),
  type: dayObj.weather_state_name,
  date: dayObj.applicable_date,
});
