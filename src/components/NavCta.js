import Button from './ui/Button';
import Flex from './ui/Flex';
import './NavCta.scss';
import { useContext } from 'react';
import { context } from '../store/weather-context';

const checkCurrentSelection = (value, condition) =>
  value === condition ? 'checked' : '';

const NavCta = () => {
  const { gradesFar, gradesCer, setTheme, data } = useContext(context);
  const { measurement, theme } = data;

  console.log(theme);

  // console.log(measurement);

  // console.log(checkCurrentSelection(measurement, '°C'));

  return (
    <Flex className="nav-cta">
      <Flex className="nav-cta__wrapper">
        <Button
          className={`nav-cta__rounded ${checkCurrentSelection(
            measurement,
            '°C'
          )}`}
          onClick={() => gradesCer()}
          disabled={measurement === '°C'}
        >
          °C
        </Button>
        <Button
          className={`nav-cta__rounded ${checkCurrentSelection(
            measurement,
            '°F'
          )}`}
          onClick={() => gradesFar()}
          disabled={measurement === '°F'}
        >
          °F
        </Button>
      </Flex>
      <Flex className="nav-cta__wrapper">
        <Button
          className={`nav-cta__rounded ${checkCurrentSelection(theme, 'L')}`}
          onClick={() => setTheme()}
          disabled={theme === 'L'}
        >
          L
        </Button>
        <Button
          className={`nav-cta__rounded ${checkCurrentSelection(theme, 'N')}`}
          onClick={() => setTheme()}
          disabled={theme === 'N'}
        >
          N
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavCta;
