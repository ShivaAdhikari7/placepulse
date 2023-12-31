import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";

import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header  ${props.headerClass}`}>
        {props.header}
      </header>

      <form
        onSubmit={`${
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }`}
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>

        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onClick={props.onCancel} />
      <ModalOverlay {...props} />;
    </>
  );
};

export default Modal;
