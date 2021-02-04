import React from 'react';
import './spinner.css';

interface SpinnerProps {
  children?: string;
  color?: string;
  size?: string;
  speed?: string;
  reversed?: boolean;
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

const Spinner = ({
  children,
  color,
  size,
  reversed,
  speed
}: SpinnerProps): JSX.Element => {
  let borderValue;
  let dimension;
  if (size === 'large') {
    borderValue = '6px';
    dimension = '60px';
  } else if (size === 'medium') {
    borderValue = '3px';
    dimension = '30px';
  } else if (size === 'small') {
    borderValue = '2px';
    dimension = '20px';
  }

  let speedClass = speed ? speed : '';

  return (
    <ErrorBoundary>
      <div
        style={{
          border: `${borderValue} solid #f3f3f3`,
          borderTop: `${borderValue} solid ${color}`,
          width: `${dimension}`,
          height: `${dimension}`
        }}
        className={`loader ${reversed ? 'reversed' : ''} ${speedClass}`}
      ></div>
    </ErrorBoundary>
  );
};

export { Spinner };
