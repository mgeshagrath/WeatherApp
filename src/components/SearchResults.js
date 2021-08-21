import { useContext } from 'react';
import { context } from '../store/weather-context';
import Button from './ui/Button';
import { ArrowIcon } from './ui/icons/Icons';

const SearchResults = ({ data }) => {
  const { getGeolocation, geo } = useContext(context);
  const { title, latt_long } = data;

  // console.log(latt_long);

  const onClickHandler = () => {
    const latlong = latt_long.split(',');
    const [lat, long] = latlong;
    // const query = {
      // console.log(latt_long);
      // console.log(lat,long);
    //   lat: latlong[0],
    //   long: latlong[1]
    // }
    getGeolocation({
      lat,
      long,
    });
  };

  // console.log(geo);
  // console.log(data);

  // console.log(geo);
  // console.log(

  return (
    <Button className="search__result" onClick={onClickHandler}>
      <span className="search__text">{title}</span>
      <ArrowIcon className="search__arrow-icon" />
    </Button>
  );
};
export default SearchResults;
