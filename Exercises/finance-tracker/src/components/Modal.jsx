import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../styling/Button";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="modal-elmnt">
      {children}
      <form method="dialog">
        <Button secondary>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default Modal;
