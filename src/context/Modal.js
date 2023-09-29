import React, { useRef, useState, useContext } from 'react';
import ReactDOM from 'react-dom';

const ModalContext = React.createContext(); // <-- create a context

export function ModalProvider({ children }) { // <-- create a provider
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);
  // callback function that will be called when modal is closing
  const [onModalClose, setOnModalClose] = useState(null);

  const closeModal = () => {
    setModalContent(null); // clear the modal contents
    // If callback function is truthy, call the callback function and reset it
    // to null:
    if (typeof onModalClose === 'function') {
      setOnModalClose(null);
      onModalClose();
    }
  };

  const contextValue = {
    modalRef, // reference to modal div
    modalContent, // React component to render inside modal
    setModalContent, // function to set the React component to render inside modal
    setOnModalClose, // function to set the callback function called when modal is closing
    closeModal // function to close the modal
  };

  return (
    <>
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal() {
  const { modalRef, modalContent, closeModal } = useContext(ModalContext);
  // If there is no div referenced by the modalRef or modalContent is not a
  // truthy value, render nothing:
  if (!modalRef || !modalRef.current || !modalContent) return null;

  // Render the following component to the div referenced by the modalRef
  return ReactDOM.createPortal(
    <div className='fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center rounded-lg' id="modal">
      <div className='fixed top-0 right-0 left-0 bottom-0 bg-[#000000b3]' id="modal-background" onClick={closeModal} />
      <div className='absolute bg-color-white' id="modal-content">
        {modalContent}
      </div>
    </div>,
    modalRef.current // <-- this is the div referenced by modalRef
  );
}

// Custom hook to use the ModalContext
export const useModal = () => useContext(ModalContext);
