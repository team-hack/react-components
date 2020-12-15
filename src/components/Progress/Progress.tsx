import React from 'react'
import './progress.css'

interface ProgressProps {
  children?: string
  height?: string
}

interface ProgressBarProps {
  children?: string
  color?: string
  striped?: string
  animated?: string
  width?: string
}

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

const Progress = ({ children, height }: ProgressProps): JSX.Element => {
  console.log(children)
  let heightRule = ''
  if (typeof height === 'string') {
    heightRule = height
  } else {
    heightRule = '25px'
  }
  return (
    <ErrorBoundary>
      <div className='progress' style={{ height: heightRule }}>
        {children}
      </div>
    </ErrorBoundary>
  )
}

const ProgressBar = ({
  children,
  color,
  striped,
  animated,
  width
}: ProgressBarProps): JSX.Element => {
  let widthRule = ''
  let colorRule = ''
  let additionalClass = ''

  if (typeof color === 'string') {
    colorRule = color
  }
  if (typeof striped === 'string' && striped === 'true') {
    additionalClass += 'progress-bar-striped '
  }

  if (typeof width === 'string') {
    console.log('oine')
    widthRule = width
  } else {
    console.log('tow')
    widthRule = '25%'
  }

  if (
    typeof animated === 'string' &&
    striped === 'true' &&
    animated === 'true'
  ) {
    additionalClass += 'animate '
  }

  console.log('with rule', widthRule)

  return (
    <ErrorBoundary>
      <div
        className={`progress-bar ${additionalClass}`}
        style={{ width: widthRule, backgroundColor: color }}
      >
        <span>{children}</span>
      </div>
    </ErrorBoundary>
  )
}

export { Progress, ProgressBar }
