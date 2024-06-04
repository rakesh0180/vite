import "./modal.scss";
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : "un-active"}`}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Modal;
