import "./modal.scss";
// eslint-disable-next-line react/prop-types
const Modal = ({
  isOpen,
  onClose,
  heading = "Modal Header",
  children,
  footer = "Modal Footer",
}) => {
  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : "un-active"}`}
      onClick={onClose}
    >
      <div className="modal-container">
        <div className="modal-header">
          <>
            <h2 className="header">{heading}</h2>
            <button className="close-btn" onClick={onClose}>
              X
            </button>
          </>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <p>{footer}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
