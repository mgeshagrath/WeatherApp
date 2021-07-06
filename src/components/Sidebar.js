import './Sidebar.scss';
import Button from './ui/Button';
import GpsIcon from './ui/icons/GpsIcon';
import heavyrain from '../assets/HeavyRain.png';
import LocationIcon from './ui/icons/LocationIcon';
import Heading from './ui/Heading';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__cto">
        <Button className="sidebar__search">Search for places</Button>
        <Button className="sidebar__user-location">
          <GpsIcon />
        </Button>
      </div>
      <div className="sidebar__weather-box">
        <img className="sidebar__weather-img" src={heavyrain} alt="Rain" />
      </div>
      <Heading type="h2" className="sidebar__temp">
        <span className="sidebar__number">15</span>
        <span className="sidebar__mess">℃</span>
      </Heading>
      <Heading type="h3" className="sidebar__type">
        Shower
      </Heading>
      <div className="sidebar__date">
        <span>Today</span>
        <span>-</span>
        <span>Fri, 5 Jun</span>
      </div>
      <div className="sidebar__location">
        <LocationIcon />
        <span>Helsinki</span>
      </div>
    </div>
  );
};

export default Sidebar;
