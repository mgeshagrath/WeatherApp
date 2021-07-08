import { Fragment } from 'react';
import './App.scss';
// import Content from './components/Content';
import Content from './components/content/Content';
// import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import Sidebar from './components/content/Sidebar';

const App = () => {
  return (
    <Fragment>
      {/* <Sidebar /> */}
      <Sidebar />

      {/* <SearchBar /> */}
      <Content />
    </Fragment>
  );
};

export default App;
