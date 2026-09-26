import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = '' }) {
  const modalRef = useRef(null)
  useEffect(() => {
    modalRef.current.showModal()
  }, [open])
  return (
    createPortal(
      <dialog ref={modalRef} open={open} className={`modal ${className}`}>
        {children}
      </dialog>, document.getElementById('modal')
    )
  )
}