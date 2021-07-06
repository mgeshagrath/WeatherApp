import { Fragment } from 'react';
import './App.scss';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Fragment>
      {/* <Sidebar /> */}
      <SearchBar />
      <Content />
    </Fragment>
  );
};

export default App;
