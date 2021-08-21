import { SearchIcon } from './ui/icons/Icons';
import { ArrowIcon } from './ui/icons/Icons';
import Button from './ui/Button';
import Card from './ui/Card';
import './SearchBar.scss';
import { Fragment, useEffect, useState } from 'react';
import SearchResults from './SearchResults';
// className="card search"
const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [resultsError, setResultsError] = useState(false)

  const searchRequests = async query => {
    setIsLoading(true);
    try {
      const proxy = 'https://api.allorigins.win/raw?url=';

      const response = await fetch(
        `${proxy}https://www.metaweather.com/api/location/search/?query=${query}`
      );
      const data = await response.json();

      if(data.length === 0) {
        setResultsError(true)
        return
      }

      setResults(data);
      setResultsError(false)
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   // const proxy = 'https://api.allorigins.win/raw?url=';

  //   // if (!lat && !long) return;

  //   // const response = await fetch(
  //   //   `${proxy}https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`
  //   // );

  //   // if (!response.ok) throw new Error('Error Fetch 1');

  //   const searchRequests = async () => {
  //     setIsLoading(true);
  //     try {
  //       const proxy = 'https://api.allorigins.win/raw?url=';

  //       const response = await fetch(
  //         `${proxy}https://www.metaweather.com/api/location/search/?query=${query}`
  //       );
  //       const data = await response.json();

  //       console.log(data);
  //     } catch (err) {
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   searchRequests();
  // }, [query]);

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError('Query must not be empty!');
      return;
    }

    if (inputValue.length < 3) {
      setError('Try something more specific!');
      return;
    }

    // /\d/.test(inputValue) ||
    // eslint-disable-next-line
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/.test(inputValue)) {
      setError('Query must be only letters!');
      return;
    }

    searchRequests(inputValue.trim());
    setInputValue('');
    setError('');
  };

  // console.log(inputValue);

  return (
    <Fragment>
      <Button onClick={() => onSearch(displayed => !displayed)} className="search__close">
        x
      </Button>
      <form className="search__form" onSubmit={onSubmitHandler}>
        <div className="search__wrapper">
          <SearchIcon className="search__icon" />
          <input
            onChange={e => setInputValue(_ => e.target.value)}
            value={inputValue}
            type="text"
            placeholder="Search cities!"
            className="search__input"
          />
        </div>
        <Button type="submit" className="search__btn">
          Search
        </Button>
      </form>

      {error && <p className="search__error">{error}</p>}
      {/* <Button className="search__result">
        <span className="search__text">Result 1</span>
        <ArrowIcon className="search__arrow-icon" />
      </Button> */}
      <Card className={`search__results ${isLoading || resultsError ? 'center' : ''}`}>
        {results.length !== 0 &&
          !isLoading &&
          results.map(result => <SearchResults key={Math.random()} data={result} />)}
        {isLoading && <Card className="spinner" />}
        {!isLoading && resultsError && (
          <p className="search__error">
            Looks like everything it's working, but we could not find anything, maybe too specific?
          </p>
        )}
      </Card>
    </Fragment>
  );
};

export default SearchBar;
