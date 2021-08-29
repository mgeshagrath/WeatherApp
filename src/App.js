import { Fragment, useContext, useEffect, useState } from 'react';
import { context } from './store/weather-context';
import Content from './components/content/Content';
import Sidebar from './components/content/Sidebar';
import Modal from './components/ui/Modal';
import { useHttp } from './hooks/useHttp';
import { PROXY, transformDayData, WEATHER_API } from './utility';

const App = () => {
  const { geo, getUserWeather } = useContext(context);
  const [isLoading, setIsLoading] = useState(false);
  const [woeidError, setWoeidError] = useState(null);
  const { error: locationError, lat, long } = geo;
  const {
    dataFetched: latLongData,
    error: latLongError,
    loading: latLongLoading,
  } = useHttp('location/search/?lattlong=', `${lat},${long}`);

  useEffect(() => {
    const weatherCall = async () => {
      setIsLoading(true);
      try {
        const { woeid } = latLongData[0];
        const response = await fetch(`${PROXY}${WEATHER_API}location/${woeid}/`);
        if (!response.ok) throw new Error();
        const {
          consolidated_weather: weather,
          title: city,
          parent: country,
        } = await response.json();

        const weatherData = weather.map(day => transformDayData(day));
        const userData = {
          city,
          country: country.title,
          language: window.navigator.language,
        };
        getUserWeather(userData, weatherData);
      } catch (err) {
        setWoeidError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (!latLongData) return;
    weatherCall();
  }, [geo, latLongData, getUserWeather]);

  if (Object.keys(geo).length === 0) return <Modal data="Waiting for your location :)" />;
  if (isLoading || latLongLoading) return <Modal data="Retrieving your data <3" />;
  if (!isLoading && !latLongLoading && locationError)
    return <Modal data="Please, enable your location :c" />;
  if (latLongError || woeidError) return <Modal data={`Something went wrong, try again!`} />;

  return (
    <Fragment>
      <Sidebar />
      <Content />
    </Fragment>
  );
};

export default App;
