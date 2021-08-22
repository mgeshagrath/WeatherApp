import { Fragment, useState } from 'react';
import { useHttp } from '../hooks/useHttp';
import { SearchIcon } from './ui/icons/Icons';
import Button from './ui/Button';
import Card from './ui/Card';
import SearchResults from './SearchResults';
import './SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [displayedError, setDisplayedError] = useState('');
  const { loading, error, dataFetched } = useHttp(`location/search/?query=`, query);

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setDisplayedError('Query must not be empty!');
      return;
    }

    if (inputValue.length < 3) {
      setDisplayedError('Try something more specific!');
      return;
    }
    // eslint-disable-next-line
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/.test(inputValue)) {
      setDisplayedError('Query must be only letters!');
      return;
    }

    setQuery(inputValue.trim());
    setInputValue('');
    setDisplayedError('');
  };

  const dataMarkup =
    !error && dataFetched ? (
      dataFetched.map(result => <SearchResults key={Math.random()} data={result} />)
    ) : (
      <p className="search__error">{error}</p>
    );

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
      {displayedError && <p className="search__error">{displayedError}</p>}
      <Card className="search__results">
        {loading && <Card className="spinner" />}
        {!loading && dataMarkup}
      </Card>
    </Fragment>
  );
};

export default SearchBar;
