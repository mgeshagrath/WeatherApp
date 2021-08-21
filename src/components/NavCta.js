import { useContext } from 'react';
import { context } from '../store/weather-context';
import { LightIcon, NightIcon } from './ui/icons/Icons';
import Button from './ui/Button';
import Card from './ui/Card';
import './NavCta.scss';

const checkCurrentSelection = (value, condition) => (value === condition ? 'left' : 'right');

const NavCta = () => {
  const { toggleMeasurement, setTheme, data } = useContext(context);
  const { measurement, theme } = data;
  // console.log(theme);
  console.log(checkCurrentSelection(theme, 'N'));

  console.log(measurement);

  return (
    <Card className="flex nav-cta">
      {/* <Card className="flex nav-cta__wrapper">
        <Button
          className={`nav-cta__rounded ${checkCurrentSelection(measurement, '°C')}`}
          onClick={gradesCer}
          disabled={measurement === '°C'}
        >
          °C
        </Button>
        <Button
          className={`nav-cta__rounded ${checkCurrentSelection(measurement, '°F')}`}
          onClick={gradesFar}
          disabled={measurement === '°F'}
        >
          °F
        </Button>
      </Card> */}

      <Button className="nav-cta__wrapper" onClick={toggleMeasurement}>
        <span
          className={`nav-cta__rounded ${checkCurrentSelection(measurement, '°C')}`}
        >
          {measurement === '°C' ? '°C' : '°F'}
        </span>
      </Button>


      <Button className="nav-cta__wrapper" onClick={setTheme}>
        <span
          className={`nav-cta__rounded ${checkCurrentSelection(theme, 'N')}`}
        >
          {theme === 'N' ? <NightIcon /> : <LightIcon />}
        </span>
      </Button>
    </Card>
  );
};

export default NavCta;
