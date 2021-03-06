import React, { useState, useEffect } from 'react';
import './carousel.css';

interface CarouselProps {
  children?: JSX.Element[] | JSX.Element;
  imageSource?: string;
  showSlide?: boolean;
  count?: number;
  currentSlide?: number;
  selectImage?(): void;
  onClick?(i: number): void;
  // height?: string
  interval?: string;
  fade?: boolean;
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

const Carousel = ({ children, interval, fade }: CarouselProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [pauseCycling, setPauseCycling] = useState(false);

  function doSomething(n) {
    if (n + currentSlide >= count) {
      setCurrentSlide(0);
    } else if (n + currentSlide < 0) {
      setCurrentSlide(count - 1);
    } else {
      setCurrentSlide(currentSlide + n);
    }
  }

  function imageSelector(n) {
    setCurrentSlide(n);
  }

  useEffect(() => {
    let counter = 0;
    Array.prototype.forEach.call(children, (child) => {
      if (child.type === CarouselItem) {
        counter++;
      }
    });

    setCount(counter);
  }, []);

  useEffect(() => {
    if (interval && !pauseCycling) {
      const listener = setInterval(() => doSomething(1), parseInt(interval));
      return () => {
        clearInterval(listener); //This is important
      };
    }
  });

  function keyEvn(e) {
    switch (e.keyCode) {
      case 37:
        doSomething(-1);
        break;
      case 38:
        setCurrentSlide(0);
        break;
      case 39:
        doSomething(1);
        break;
      case 40:
        setCurrentSlide(count - 1);
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyEvn);
    return () => {
      window.removeEventListener('keydown', keyEvn);
    };
  });

  function msEnter() {
    setPauseCycling(true);
  }
  function msLeave() {
    setPauseCycling(false);
  }

  return (
    <ErrorBoundary>
      <div
        onMouseOver={msEnter}
        onMouseOut={msLeave}
        className='carousel-container'
      >
        {React.Children.map(children, (child, i) => {
          if (child) {
            let showSlide = false;
            if (currentSlide === i) {
              showSlide = true;
            }
            const childProps = child.props;
            const { onClick, value } = childProps;
            return React.cloneElement(child, {
              ...child.props,
              onClick: (n) => {
                doSomething(n);
              },
              selectImage: (n: number) => {
                imageSelector(n);
              },
              showSlide,
              count,
              currentSlide,
              fade
            });
          }
          return null;
        })}
      </div>
    </ErrorBoundary>
  );
};

const CarouselItem = ({
  children,
  imageSource,
  showSlide,
  fade
}: CarouselProps): JSX.Element => {
  return (
    <div
      data-testid='carousel-item'
      className={`${showSlide ? 'show' : 'hide'} ${fade ? 'fade' : ''}`}
    >
      {children}
    </div>
  );
};

const CarouselControl = ({
  children,
  onClick,
  ...props
}: CarouselProps): JSX.Element => {
  function clickPrev() {
    onClick(-1);
  }

  function clickNext() {
    onClick(1);
  }

  return (
    <>
      <a data-testid='prev' className='prev' onClick={clickPrev}>
        &#10094;
      </a>
      <a data-testid='next' className='next' onClick={clickNext}>
        &#10095;
      </a>
    </>
  );
};

const CarouselIndicators = ({
  count,
  currentSlide,
  selectImage
}: CarouselProps): JSX.Element => {
  let elementArray = [];
  for (let i = 0; i < count; i++) {
    if (i === currentSlide) {
      elementArray.push(
        <span
          onClick={() => selectImage(i)}
          key={i}
          className='dot active'
        ></span>
      );
    } else {
      elementArray.push(
        <span key={i} onClick={() => selectImage(i)} className='dot'></span>
      );
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
    </div>
  );
};

const CarouselImage = ({
  imageSource,
  showSlide
}: CarouselProps): JSX.Element => {
  return <img className='img' src={imageSource} style={{ width: '100%' }} />;
};

const CarouselCaption = ({
  children,
  imageSource,
  ...props
}: CarouselProps): JSX.Element => {
  return <div className='text'>{children}</div>;
};

const useCounter = () => {
  const [count, setCount] = useState(0);
  return {};
};

export {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselImage,
  CarouselCaption,
  useCounter
};
