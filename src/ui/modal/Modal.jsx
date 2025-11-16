import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function OpenButton({ button }) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  return cloneElement(button, {
    onClick: (e) => {
      e.stopPropagation();
      if (isOpen) setIsOpen(false);
      else setIsOpen(true);
    },
  });
}

function Window({ children }) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const ref = useRef(null);
  useEffect(() => {
    function handleDocumentClick(e) {
      if (ref.current === null || ref.current.contains(e.target)) return;
      setIsOpen(false);
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [setIsOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-1/2 left-1/2 z-50 -translate-1/2" ref={ref}>
      {children}
    </div>,
    document.body,
  );
}

function Modal({ button, window }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <OpenButton button={button}></OpenButton>
      <Window>{window}</Window>
    </ModalContext.Provider>
  );
}

export default Modal;
