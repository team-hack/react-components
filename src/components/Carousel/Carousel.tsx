import React, { useState, useEffect } from 'react'
import './carousel.css'

interface CarouselProps {
  children?: string
  imageSource?: string
  // height?: string
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

const Carousel = ({ children }: CarouselProps): JSX.Element => {
  const [count, setCount] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(1)

  function doSomething(n) {
    setCurrentSlide(currentSlide + n)
  }

  useEffect(() => {
    children &&
      children.forEach((child) => {
        if (child.type === CarouselItem) {
          setCount(count + 1)
        }
      })
  }, [])
  console.log(count)
  return (
    <ErrorBoundary>
      <div
        className='carousel-container'
        // style={{ height: heightRule, display: multipleStyle }}
      >
        {React.Children.map(children, (child, i) => {
          if (child) {
            let showSlide = false
            if (currentSlide === i) {
              showSlide = true
            }
            const childProps = child.props
            const { onClick, value } = childProps
            return React.cloneElement(child, {
              ...child.props,
              onClick: (n) => {
                doSomething(n)
              },
              showSlide
            })
          }
          return null
        })}
      </div>
    </ErrorBoundary>
  )
}

const CarouselItem = ({
  children,
  imageSource,
  showSlide
}: CarouselProps): JSX.Element => {
  return (
    <div className={`fade ${showSlide ? 'show' : 'hide'}`}>
      {/* <div class='numbertext'>1 / 3</div> */}

      <img src={imageSource} style={{ width: '100%' }} />
      <div className='text'>Caption Text</div>
    </div>
  )
}

const CarouselControl = ({
  children,
  onClick,
  ...props
}: CarouselProps): JSX.Element => {
  function clickPrev() {
    onClick(-1)
  }

  function clickNext() {
    onClick(1)
  }

  return (
    <>
      <a className='prev' onClick={clickPrev}>
        &#10094;
      </a>
      <a className='next' onClick={clickNext}>
        &#10095;
      </a>
    </>
  )
}

// const ProgressBar = ({
//   children,
//   color,
//   striped,
//   animated,
//   width
// }: ProgressBarProps): JSX.Element => {
//   let widthRule = width && typeof width === 'string' ? width : '25%'
//   let colorRule =
//     color && typeof color === 'string' ? color : 'rgb(43, 194, 83)'
//   let additionalClass = ''

//   if (typeof striped === 'string' && striped === 'true') {
//     additionalClass += 'progress-bar-striped '
//   }

//   if (
//     typeof animated === 'string' &&
//     striped === 'true' &&
//     animated === 'true'
//   ) {
//     additionalClass += 'animate '
//   }

//   return (
//     <ErrorBoundary>
//       <div
//         className={`progress-bar ${additionalClass}`}
//         style={{ width: widthRule, backgroundColor: colorRule }}
//       >
//         <span>{children}</span>
//       </div>
//     </ErrorBoundary>
//   )
// }

export { Carousel, CarouselItem, CarouselControl }
