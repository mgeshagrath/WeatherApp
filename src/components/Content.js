import Heading from './ui/Heading';
import './Content.scss';
import Weather from './Weather';
import Details from './Details';

const Content = () => {
  return (
    <div className="content">
      <div className="content__incoming">
        <Weather />
        <Weather />
        <Weather />
        <Weather />
        <Weather />
        <Weather />
      </div>

      <div className="content__details">
        <Heading className="content__title" type="h2">
          Today's Highlights
        </Heading>
        <div className="content__wrapper">
          <Details type="wind" />
          <Details type="bar" />
          <Details />
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Content;
