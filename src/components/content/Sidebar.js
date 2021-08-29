import {  useState } from 'react';
import Card from '../ui/Card';
import './Sidebar.scss';
import DayBar from '../DayBar';
import SearchBar from '../SearchBar';

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <Card className="card sidebar">
      {!toggleSidebar && <DayBar onSearch={setToggleSidebar}/>}
      {toggleSidebar && <SearchBar onSearch={setToggleSidebar} />}
    </Card>
  );
};

export default Sidebar;
