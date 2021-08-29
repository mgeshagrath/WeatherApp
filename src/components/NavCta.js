import { useContext } from 'react';
import { context } from '../store/weather-context';
import { LightIcon, NightIcon } from './ui/icons/Icons';
import Button from './ui/Button';
import Card from './ui/Card';
import './NavCta.scss';
import { checkCurrentSelection } from '../utility';

const NavCta = () => {
  const { toggleMeasurement, setTheme, measurement, theme } = useContext(context);

  return (
    <Card className="flex nav-cta">
      <Button className="nav-cta__wrapper" onClick={toggleMeasurement}>
        <span
          style={{
            marginLeft: checkCurrentSelection(measurement, '°F'),
            marginRight: checkCurrentSelection(measurement, '°c'),
          }}
          className={`nav-cta__rounded`}
        >
          {measurement === '°C' ? '°C' : '°F'}
        </span>
      </Button>

      <Button className="nav-cta__wrapper" onClick={setTheme}>
        <span
          style={{
            marginLeft: checkCurrentSelection(theme, 'L'),
            marginRight: checkCurrentSelection(theme, 'N'),
          }}
          className={`nav-cta__rounded`}
        >
          {theme === 'N' ? <NightIcon /> : <LightIcon />}
        </span>
      </Button>
    </Card>
  );
};

export default NavCta;
