import React from 'react'
import { Carousel, CarouselItem, CarouselControl } from './Carousel'

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
  <Carousel {...args}>
    {/* <ProgressBar {...args}>{args.label}</ProgressBar>
    <ProgressBar {...args}>{args.label}</ProgressBar> */}
    <CarouselItem imageSource='https://homepages.cae.wisc.edu/~ece533/images/monarch.png'></CarouselItem>
    {/* <CarouselItem imageSource='https://homepages.cae.wisc.edu/~ece533/images/sails.png'></CarouselItem> */}
    <CarouselControl />
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
