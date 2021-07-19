import { Fragment } from 'react';
import './ValueType.scss';

const ValueType = ({ type, data }) => {
  const { windSpeed, airPressure, humidity, visibility } = data;

  if (type === 'Wind Status')
    return (
      <Fragment>
        <span className="value-type value-type__number">{windSpeed}</span>
        <span className="value-type value-type__measure">{`km/h`}</span>
      </Fragment>
    );

  if (type === 'Humidity')
    return (
      <Fragment>
        <span className="value-type value-type__number">{humidity}</span>
        <span className="value-type value-type__measure">%</span>
      </Fragment>
    );

  if (type === 'Visibility')
    return (
      <Fragment>
        <span className="value-type value-type__number">{visibility}</span>
        <span className="value-type value-type__measure">km</span>
      </Fragment>
    );

  if (type === 'Air Pressure')
    return (
      <Fragment>
        <span className="value-type value-type__number">{airPressure}</span>
        <span className="value-type value-type__measure">mb</span>
      </Fragment>
    );
};

export default ValueType;
