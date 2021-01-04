import React from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselImage,
  CarouselCaption
} from './Carousel'

export default {
  component: Carousel,
  title: 'Carousel'
}

export const Basic = (args) => (
  <div style={{ width: '500px', height: '350px' }}>
    <Carousel {...args}>
      <CarouselItem>
        <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/monarch.png'></CarouselImage>
        <CarouselCaption>
          <h2>Slide 1</h2>
          <p style={{ marginBottom: '1px' }}> text 1</p>
          <p style={{ marginBottom: '10px' }}>more text 1</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/sails.png'></CarouselImage>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/cat.png'></CarouselImage>
        <CarouselCaption>
          <h2>Slide 3</h2>
          <p style={{ marginBottom: '1px' }}> text 3</p>
          <p style={{ marginBottom: '10px' }}>more text 3</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/pool.png'></CarouselImage>
      </CarouselItem>
      <CarouselControl />
      <CarouselIndicators />
    </Carousel>
  </div>
)

export const AutoPlay = (args) => (
  <Carousel {...args} interval='2000'>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/monarch.png'></CarouselImage>
      <CarouselCaption>
        <h2>Slide 1</h2>
        <p style={{ marginBottom: '1px' }}> text 1</p>
        <p style={{ marginBottom: '10px' }}>more text 1</p>
      </CarouselCaption>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/sails.png'></CarouselImage>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/cat.png'></CarouselImage>
      <CarouselCaption>
        <h2>Slide 3</h2>
        <p style={{ marginBottom: '1px' }}> text 3</p>
        <p style={{ marginBottom: '10px' }}>more text 3</p>
      </CarouselCaption>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/pool.png'></CarouselImage>
    </CarouselItem>
    <CarouselControl />
    <CarouselIndicators />
  </Carousel>
)

export const AutoPlayNoIndicators = (args) => (
  <Carousel {...args} interval='2000'>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/monarch.png'></CarouselImage>
      <CarouselCaption>
        <h2>Slide 1</h2>
        <p style={{ marginBottom: '1px' }}> text 1</p>
        <p style={{ marginBottom: '10px' }}>more text 1</p>
      </CarouselCaption>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/sails.png'></CarouselImage>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/cat.png'></CarouselImage>
      <CarouselCaption>
        <h2>Slide 3</h2>
        <p style={{ marginBottom: '1px' }}> text 3</p>
        <p style={{ marginBottom: '10px' }}>more text 3</p>
      </CarouselCaption>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/pool.png'></CarouselImage>
    </CarouselItem>
  </Carousel>
)

export const FadeEffect = (args) => (
  <Carousel {...args} interval='2000'>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/monarch.png'></CarouselImage>
      <CarouselCaption>
        <h2>Slide 1</h2>
        <p style={{ marginBottom: '1px' }}> text 1</p>
        <p style={{ marginBottom: '10px' }}>more text 1</p>
      </CarouselCaption>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/sails.png'></CarouselImage>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/cat.png'></CarouselImage>
      <CarouselCaption>
        <h2>Slide 3</h2>
        <p style={{ marginBottom: '1px' }}> text 3</p>
        <p style={{ marginBottom: '10px' }}>more text 3</p>
      </CarouselCaption>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/pool.png'></CarouselImage>
    </CarouselItem>
  </Carousel>
)
