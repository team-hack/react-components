import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import './modal.scss';

interface ModalProps {
  children?: JSX.Element[];
  onClose?: () => void;
  open: boolean;
  staticBackground?: boolean;
}

interface ModalElementsProps {
  children: JSX.Element | JSX.Element[];
  text?: string;
  align?: string;
}

interface ModalHeaderProps {
  text: string;
  closeModal?: () => void;
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

const Modal = ({
  children,
  onClose,
  open,
  staticBackground
}: ModalProps): JSX.Element => {
  const [showModal, setShowModal] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!staticBackground) {
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          onClose();
          setShowModal(null);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [wrapperRef]);

  useEffect(() => {
    if (open === true && showModal === null) {
      setShowModal(true);
    } else if (open === false && showModal === true) {
      setShowModal(null);
    }
  }, [open]);

  function closeModal() {
    onClose();
    setShowModal(null);
  }

  return showModal
    ? ReactDom.createPortal(
        <ErrorBoundary>
          <div className='modal-background'>
            <div ref={wrapperRef} className='modal'>
              {React.Children.map(children, (child, i) => {
                if (child.type === ModalHeader) {
                  return React.cloneElement(child, {
                    ...child.props,
                    closeModal
                  });
                }
                return child;
              })}
            </div>
          </div>
        </ErrorBoundary>,
        document.body
      )
    : null;
};

const ModalHeader = ({ closeModal, text }: ModalHeaderProps): JSX.Element => {
  return (
    <div className='modal-header'>
      <strong>{text}</strong>
      <span className='modal-close' onClick={() => closeModal()}>
        &times;
      </span>
    </div>
  );
};

const ModalBody = ({ children, align }: ModalElementsProps): JSX.Element => {
  console.log('align in body', align);
  const alignClass = align ? align : '';
  return <div className={`modal-body ${alignClass}`}>{children}</div>;
};

const ModalFooter = ({ children, align }: ModalElementsProps): JSX.Element => {
  const alignClass = align ? align : '';
  return <div className={`modal-footer ${alignClass}`}>{children}</div>;
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
