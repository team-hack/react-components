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
  <Carousel {...args}>
    {/* <ProgressBar {...args}>{args.label}</ProgressBar>
    <ProgressBar {...args}>{args.label}</ProgressBar> */}
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/monarch.png'></CarouselImage>
      <CarouselCaption>
        <h2>hello</h2>
        <p>goodbye</p>
      </CarouselCaption>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/sails.png'></CarouselImage>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/cat.png'></CarouselImage>
    </CarouselItem>
    <CarouselItem>
      <CarouselImage imageSource='https://homepages.cae.wisc.edu/~ece533/images/pool.png'></CarouselImage>
    </CarouselItem>
    <CarouselControl />
    <CarouselIndicators />
  </Carousel>
)

Basic.args = {
  striped: 'false',
  width: '25%',
  animated: 'false',
  label: '',
  color: 'rgb(43, 194, 83)',
  height: '25px'
}
