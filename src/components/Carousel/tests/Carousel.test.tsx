import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {
  Carousel,
  CarouselItem,
  CarouselImage,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators
} from '../Carousel'

// test('Progress component can nest components', () => {
//   const { container } = render(
//     <Carousel>
//       <CarouselItem />
//     </Carousel>
//   )
//   console.log(container.firstChild.firstChild)
//   expect(container.firstChild.firstChild).toHaveLength(1)
// })

describe('Progress Bar', () => {
  beforeEach(() => {
    render(
      <Carousel>
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
  })

  test('there are 4 images in the carousel', () => {
    const $card = screen.getAllByTestId('carousel-item')
    console.log($card.length)
    expect($card.length).toBe(4)
  })

  test('ther second shows up', () => {
    const $card = screen.getAllByTestId('carousel-item')
    expect($card[0]).toHaveClass('hide')
    expect($card[1]).toHaveClass('show')
    expect($card[2]).toHaveClass('hide')
    expect($card[3]).toHaveClass('hide')
  })
  // test('Progress component can nest components', () => {
  //   console.log(container.firstChild.firstChild)
  //   expect(container.).toHaveClass('carousel-item')
  // })
  test('the next card shows up if user clicks next', () => {
    userEvent.click(screen.getByTestId('next'))
    const $card = screen.getAllByTestId('carousel-item')
    expect($card[0]).toHaveClass('hide')
    expect($card[1]).toHaveClass('hide')
    expect($card[2]).toHaveClass('show')
    expect($card[3]).toHaveClass('hide')
  })

  test('the prev card shows up if user clicks prev', () => {
    userEvent.click(screen.getByTestId('prev'))
    const $card = screen.getAllByTestId('carousel-item')
    expect($card[0]).toHaveClass('show')
    expect($card[1]).toHaveClass('hide')
    expect($card[2]).toHaveClass('hide')
    expect($card[3]).toHaveClass('hide')
  })

  test('carousel goes back to first', () => {
    userEvent.click(screen.getByTestId('next'))
    userEvent.click(screen.getByTestId('next'))
    userEvent.click(screen.getByTestId('next'))

    const $card = screen.getAllByTestId('carousel-item')
    expect($card[0]).toHaveClass('show')
    expect($card[1]).toHaveClass('hide')
    expect($card[2]).toHaveClass('hide')
    expect($card[3]).toHaveClass('hide')
  })

  test('if click prev on first card goes to last card', () => {
    userEvent.click(screen.getByTestId('prev'))
    userEvent.click(screen.getByTestId('prev'))

    const $card = screen.getAllByTestId('carousel-item')
    expect($card[0]).toHaveClass('hide')
    expect($card[1]).toHaveClass('hide')
    expect($card[2]).toHaveClass('hide')
    expect($card[3]).toHaveClass('show')
  })
})
