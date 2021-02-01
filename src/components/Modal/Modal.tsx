import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import './modal.scss';

interface ModalProps {
  children?: any;
  onClose?: any;
  open?: any;
  heightProp?: any;
  style?: any;
  closeModal?: any;
  text?: any;
}

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert('You clicked outside of me!');
        return 'yessss';
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const Modal = ({
  children,
  onClose,
  open,
  heightProp
}: ModalProps): JSX.Element => {
  const [showModal, setShowModal] = useState(null);
  const wrapperRef = useRef(null);

  // useOutsideAlerter(wrapperRef);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // alert('You clicked outside of me!');
        setShowModal(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    console.log('open', open, showModal);
    if (open === true && showModal === null) {
      setShowModal(true);
    }
    if (open === false && showModal === true) {
      setShowModal(false);
    }
  }, [open]);
  function closeModal() {
    setShowModal(!showModal);
  }

  return showModal
    ? ReactDom.createPortal(
        <ErrorBoundary>
          <div className='modal-background'>
            <div
              ref={wrapperRef}
              className={`modal position-${heightProp}`}
              style={{ position: 'absolute', right: '10%' }}
            >
              {React.Children.map(children, (child, i) => {
                if (child.type === ModalHeader) {
                  return React.cloneElement(child, {
                    ...child.props,
                    closeModal
                  });
                }
                return child;
              })}
              {/* <div className='modal-header'>
                <strong className='mr-auto'>Bootstrap</strong>
                <span className='modal-close' onClick={() => closeModal()}>
                  &times;
                </span>
              </div> */}
              {/* <div className='modal-body'>{children}</div> */}
            </div>
          </div>
        </ErrorBoundary>,
        document.body
      )
    : null;
};

const ModalHeader = ({
  children,
  closeModal,
  text
}: ModalProps): JSX.Element => {
  console.log('this is close modal', closeModal);
  return (
    <div className='modal-header'>
      <strong className='mr-auto'>{text}</strong>
      <span className='modal-close' onClick={() => closeModal()}>
        &times;
      </span>
    </div>
  );
};

const ModalBody = ({ children }: ModalProps): JSX.Element => {
  return <div className='modal-body'>{children}</div>;
};

const ModalFooter = ({ children }: ModalProps): JSX.Element => {
  return <div className='modal-footer'>{children}</div>;
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
