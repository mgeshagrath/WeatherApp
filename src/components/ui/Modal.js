import Card from './Card';
import './Modal.scss';
import Spinner from './Spinner';

const Modal = ({ data }) => {
  return (
    <Card className="modal">
      <Spinner />
      <p className="modal__paragraph">{data}</p>
    </Card>
  );
};

export default Modal;
