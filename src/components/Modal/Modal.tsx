import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDom from 'react-dom';
import './modal.scss';

interface ModalProps {
  children?: any;
  onClose?: any;
  open?: any;
  heightProp?: any;
  style?: any;
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
  heightProp
}: ModalProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (open === true) {
      setShowModal(true);
    }
  });
  // function closeModal(e) {

  //   setShowModal(!showModal);
  // }

  return open
    ? ReactDom.createPortal(
        <ErrorBoundary>
          <div
            className={`modal position-${heightProp}`}
            style={{ position: 'absolute', right: '10%' }}
          >
            <div className='modal-header'>
              <strong className='mr-auto'>Bootstrap</strong>
              <span
                className='modal-close'
                onClick={() => setShowModal(!showModal)}
              >
                &times;
              </span>
            </div>
            <div className='modal-body'>{children}</div>
          </div>
        </ErrorBoundary>,
        document.body
      )
    : null;
};

export { Modal };
