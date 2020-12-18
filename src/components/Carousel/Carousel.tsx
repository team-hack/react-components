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
    console.log('this is n', n, currentSlide, count)
    if (n + currentSlide >= count) {
      console.log('greater than count')
      setCurrentSlide(0)
    } else if (n + currentSlide < 0) {
      console.log('less than 1', count)
      setCurrentSlide(count - 1)
    } else {
      console.log('in range')
      setCurrentSlide(currentSlide + n)
    }
  }

  // function doSomething2(n) {
  //   console.log('doing something 2', n)
  //   setCurrentSlide(n)
  // }

  useEffect(() => {
    console.log(children)
    let counter = 0
    children &&
      children.forEach((child, i) => {
        if (child.type === CarouselItem) {
          counter++
        }
      })
    setCount(counter)
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
              second: (n) => {
                doSomething2(n)
              },
              showSlide,
              count,
              currentSlide
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

const CarouselIndicators = ({
  children,
  imageSource,
  count,
  currentSlide
}: // second
CarouselProps): JSX.Element => {
  console.log('count in indicator', count)
  let elementArray = []
  for (let i = 0; i < count; i++) {
    if (i === currentSlide) {
      elementArray.push(
        // onClick={() => second(i)}
        <span key={i} className='dot active'></span>
      )
    } else {
      elementArray.push(
        //onClick={() => second(i)}
        <span key={i} className='dot'></span>
      )
    }
  }
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'absolute',
        left: '50%',
        bottom: '20px'
      }}
    >
      {elementArray}
      {/* <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span> */}
    </div>
  )
}

export { Carousel, CarouselItem, CarouselControl, CarouselIndicators }
