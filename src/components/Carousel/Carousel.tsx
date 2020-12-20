import React, { useState, useEffect } from 'react'
import './carousel.css'

interface CarouselProps {
  children?: JSX.Element[] | JSX.Element
  imageSource?: string
  showSlide?: boolean
  count?: number
  currentSlide?: number
  selectImage?(): void
  onClick?(i: number): void
  // height?: string
  interval?: string
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

const Carousel = ({ children, interval }: CarouselProps): JSX.Element => {
  const [count, setCount] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(1)
  const [pauseCycling, setPauseCycling] = useState(false)

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

  function imageSelector(n) {
    console.log('doing something 2', n)
    setCurrentSlide(n)
  }

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

  useEffect(() => {
    if (interval && !pauseCycling) {
      const listener = setInterval(() => doSomething(1), parseInt(interval))
      return () => {
        clearInterval(listener) //This is important
      }
    }
  })

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
              selectImage: (n) => {
                imageSelector(n)
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
  return <div className={`fade ${showSlide ? 'show' : 'hide'}`}>{children}</div>
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
  currentSlide,
  selectImage
}: CarouselProps): JSX.Element => {
  console.log('count in indicator', count)
  let elementArray = []
  for (let i = 0; i < count; i++) {
    if (i === currentSlide) {
      elementArray.push(
        <span
          onClick={() => selectImage(i)}
          key={i}
          className='dot active'
        ></span>
      )
    } else {
      elementArray.push(
        <span key={i} onClick={() => selectImage(i)} className='dot'></span>
      )
    }
  }
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        margin: 'auto',
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

const CarouselImage = ({
  // children,
  imageSource,
  showSlide
}: CarouselProps): JSX.Element => {
  return <img className='img' src={imageSource} style={{ width: '100%' }} />
}

const CarouselCaption = ({
  children,
  imageSource,
  ...props
}: CarouselProps): JSX.Element => {
  console.log(props)
  return <div className='text'>{children}</div>
}

export {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselImage,
  CarouselCaption
}
