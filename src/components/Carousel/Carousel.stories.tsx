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
  title: 'Carousel',
  argTypes: {
    color: { control: 'color' },
    striped: {
      control: {
        type: 'select',
        options: ['true', 'false']
      }
    }
  }
}

export const Basic = (args) => (
  // <Carousel {...args} auto={true}>
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

Basic.args = {
  striped: 'false',
  width: '25%',
  animated: 'false',
  label: '',
  color: 'rgb(43, 194, 83)',
  height: '25px'
}

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
