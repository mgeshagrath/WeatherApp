import Card from './Card';

import './UiStyles.scss';

const Modal = ({ data }) => {
  return (
    <Card className="modal">
      <Card className="spinner" />
      <p className="modal__paragraph">{data}</p>
    </Card>
  );
};

export default Modal;
