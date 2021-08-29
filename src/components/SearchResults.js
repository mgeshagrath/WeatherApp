import { useContext } from 'react';
import { context } from '../store/weather-context';
import Button from './ui/Button';
import { ArrowIcon } from './ui/icons/Icons';

const SearchResults = ({ data }) => {
  const { getGeolocation } = useContext(context);
  const { title, latt_long } = data;

  const onClickHandler = () => {
    const latlong = latt_long.split(',');
    const [lat, long] = latlong;
    getGeolocation({
      lat,
      long,
    });
  };

  return (
    <Button className="search__result" onClick={onClickHandler}>
      <span className="search__text">{title}</span>
      <ArrowIcon className="search__arrow-icon" />
    </Button>
  );
};
export default SearchResults;
