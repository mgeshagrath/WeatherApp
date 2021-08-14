import { useContext } from 'react';
import { context } from '../store/weather-context';
import { LightIcon, NightIcon } from './ui/icons/Icons';
import Button from './ui/Button';
import Card from './ui/Card';
import './NavCta.scss';

const checkCurrentSelection = (value, condition) => (value === condition ? 'checked' : 'unchecked');

const NavCta = () => {
  const { gradesFar, gradesCer, setTheme, data } = useContext(context);
  const { measurement, theme } = data;

  return (
    <Card className="flex nav-cta">
      <Card className="flex nav-cta__wrapper">
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
      </Card>
      <Card className="flex nav-cta__wrapper">
        <Button
          className={`nav-cta__rounded ${checkCurrentSelection(theme, 'L')}`}
          onClick={setTheme}
          disabled={theme === 'L'}
        >
          <LightIcon />
        </Button>
        <Button
          className={`nav-cta__rounded ${checkCurrentSelection(theme, 'N')}`}
          onClick={setTheme}
          disabled={theme === 'N'}
        >
          <NightIcon />
        </Button>
      </Card>
    </Card>
  );
};

export default NavCta;
