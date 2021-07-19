import clear from '../../../assets/clear.png';
import hail from '../../../assets/hail.png';
import heavycloud from '../../../assets/heavycloud.png';
import heavyrain from '../../../assets/heavyrain.png';
import lightcloud from '../../../assets/lightcloud.png';
import lightrain from '../../../assets/lightrain.png';
import showers from '../../../assets/showers.png';
import sleet from '../../../assets/sleet.png';
import snow from '../../../assets/snow.png';
import thunderstorm from '../../../assets/thunderstorm.png';

const images = {
  clear,
  hail,
  heavycloud,
  heavyrain,
  lightcloud,
  lightrain,
  showers,
  sleet,
  snow,
  thunderstorm,
};

const getImgByKey = key => images[key];

export default getImgByKey;
