import './modal.css';
import { Button } from 'react-bootstrap';

const Modal = ({ handleClose, show, children, handleSubmit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}



        {/* <div className="buttonsection">
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </div> */}
      </section>
    </div>
  );
};
export default Modal;