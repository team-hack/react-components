import React from 'react';
import './progress.css';

interface ProgressProps {
  children?: string;
  height?: string;
}

interface ProgressBarProps {
  children?: string;
  color?: string;
  striped?: string;
  animated?: string;
  width?: string;
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

const Progress = ({ children, height }: ProgressProps): JSX.Element => {
  let multipleStyle = children.length > 1 ? 'flex' : 'block';
  let heightRule = height && typeof height === 'string' ? height : '25px';

  return (
    <ErrorBoundary>
      <div
        className='progress'
        style={{ height: heightRule, display: multipleStyle }}
      >
        {children}
      </div>
    </ErrorBoundary>
  );
};

const ProgressBar = ({
  children,
  color,
  striped,
  animated,
  width
}: ProgressBarProps): JSX.Element => {
  let widthRule = width && typeof width === 'string' ? width : '25%';
  let colorRule =
    color && typeof color === 'string' ? color : 'rgb(43, 194, 83)';
  let additionalClass = '';

  if (typeof striped === 'string' && striped === 'true') {
    additionalClass += 'progress-bar-striped ';
  }

  if (
    typeof animated === 'string' &&
    striped === 'true' &&
    animated === 'true'
  ) {
    additionalClass += 'animate ';
  }

  return (
    <ErrorBoundary>
      <div
        className={`progress-bar ${additionalClass}`}
        style={{ width: widthRule, backgroundColor: colorRule }}
      >
        <span>{children}</span>
      </div>
    </ErrorBoundary>
  );
};

export { Progress, ProgressBar };
