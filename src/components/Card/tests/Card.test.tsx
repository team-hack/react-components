import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {
  Card,
  CardBody,
  CardImage,
  CardHeader,
  CardFooter,
  CardImageOverlay,
  CardImageContainer
} from '../Card'

describe('Card component', () => {
  test('should have default width of 300px', () => {
    render(<Card>content</Card>)
    const $card = screen.getByText('content')
    expect($card).toHaveStyle({ width: '300px' })
  })

  test('should set width in pixels if width parameter passed in', () => {
    render(<Card width='400'>content</Card>)
    const $card = screen.getByText('content')
    expect($card).toHaveStyle({ width: '400px' })
  })

  test('should set width in percent if width parameter appended with -pct', () => {
    render(<Card width='25-pct'>content</Card>)
    const $card = screen.getByText('content')
    expect($card).toHaveStyle({ width: '25%' })
  })

  test('should set width in percent if width parameter appended with -rem', () => {
    render(<Card width='25-rem'>content</Card>)
    const $card = screen.getByText('content')
    expect($card).toHaveStyle({ width: '25rem' })
  })

  test('card component can nest components', () => {
    const { container } = render(
      <Card>
        <CardBody />
      </Card>
    )
    expect(container.firstChild.firstChild).toHaveClass('card-body')
  })
})

describe('CardImage', () => {
  test('component has a src property', () => {
    const { container } = render(
      <CardImage imageSource='http://hello.com'>content</CardImage>
    )

    expect(container.firstChild.firstChild).toHaveProperty('src')
  })

  test('has a src property of "" if no imageSource prop provided', () => {
    const { container } = render(<CardImage>content</CardImage>)

    expect(container.firstChild.firstChild).toHaveAttribute('src', '')
  })

  test('has a src property if imageSource prop provided', () => {
    const { container } = render(
      <CardImage imageSource='http://hello.com'>content</CardImage>
    )

    expect(container.firstChild.firstChild).toHaveAttribute(
      'src',
      'http://hello.com'
    )
  })

  test('can have text overlay over an image', () => {
    const { container } = render(
      <Card>
        <CardImageContainer>
          <CardImage />
          <CardImageOverlay position='bottom-left'>
            <h3>hello</h3>
            <p>over the image</p>
          </CardImageOverlay>
        </CardImageContainer>
      </Card>
    )

    expect(container.firstChild.firstChild).toHaveClass('image-container')
    expect(container.firstChild.firstChild.lastChild).toHaveClass(
      'image-overlay'
    )

    expect(
      container.firstChild.firstChild.lastChild.firstChild
    ).toHaveTextContent('hello')
  })
})

describe('CardHeader', () => {
  test('should have have a class of card-header', () => {
    const { container } = render(
      <Card>
        <CardHeader />
      </Card>
    )

    expect(container.firstChild.firstChild).toHaveClass('card-header')
  })
})

describe('CardFooter', () => {
  test('should have have a class of card-footer', () => {
    const { container } = render(
      <Card>
        <CardFooter />
      </Card>
    )

    expect(container.firstChild.firstChild).toHaveClass('card-footer')
  })
})

describe('text alignment', () => {
  test('should have left text alignment', () => {
    render(<CardBody align='left'>content</CardBody>)
    const $card = screen.getByText('content')
    expect($card).toHaveClass('left')
  })
  test('should have right text alignment', () => {
    render(<CardBody align='right'>content</CardBody>)
    const $card = screen.getByText('content')
    expect($card).toHaveClass('right')
  })
  test('should have center text alignment', () => {
    render(<CardBody align='center'>content</CardBody>)
    const $card = screen.getByText('content')
    expect($card).toHaveClass('center')
  })
})
