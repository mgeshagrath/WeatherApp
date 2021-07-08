import Card from '../ui/Card';
import NextDays from '../NextDays';
import CurrentDay from '../CurrentDay';

import './Content.scss';

const Content = () => {
  return (
    <Card className="content">
      <NextDays />
      <CurrentDay />
    </Card>
  );
};

export default Content;
