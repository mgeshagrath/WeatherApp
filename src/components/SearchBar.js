import Button from './ui/Button';
import SearchIcon from './ui/icons/SearchIcon';
import ArrowIcon from './ui/icons/ArrowIcon';

import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search">
      <Button className="search__close">x</Button>
      <form className="search__form">
        <div className="search__wrapper">
          <SearchIcon className="search__icon" />
          <input
            type="text"
            placeholder="Search Location"
            className="search__input"
          />
        </div>
        <Button type="submit" className="search__btn">
          Search
        </Button>
      </form>

      <Button className="search__result">
        <span className="search__text">Result 1</span>
        <ArrowIcon />
      </Button>
    </div>
  );
};

export default SearchBar;