import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Progress, ProgressBar } from '../Progress'

describe('Progress component', () => {
  test('should have default height of 25px', () => {
    render(<Progress>content</Progress>)
    const $progress = screen.getByText('content')
    expect($progress).toHaveStyle({ height: '25px' })
  })

  test('should set height in pixels if height parameter passed in', () => {
    render(<Progress height='30px'>content</Progress>)
    const $progress = screen.getByText('content')
    expect($progress).toHaveStyle({ height: '30px' })
  })

  test('Progress component can nest components', () => {
    const { container } = render(
      <Progress>
        <ProgressBar />
      </Progress>
    )
    expect(container.firstChild.firstChild).toHaveClass('progress-bar')
  })
})

describe('Progress Bar', () => {
  test('should have default width of 25%', () => {
    const { container } = render(<ProgressBar>content</ProgressBar>)
    expect(container.firstChild).toHaveStyle({ width: '25%' })
  })

  test('should have width of 30%', () => {
    const { container } = render(<ProgressBar width='30%'>content</ProgressBar>)
    expect(container.firstChild).toHaveStyle({ width: '30%' })
  })

  test('should have stripe', () => {
    const { container } = render(
      <ProgressBar striped='true'>content</ProgressBar>
    )
    expect(container.firstChild).toHaveClass('progress-bar-striped')
  })

  test('should be animated if both striped and animated property', () => {
    const { container } = render(
      <ProgressBar striped='true' animated='true'>
        content
      </ProgressBar>
    )
    expect(container.firstChild).toHaveClass('animate')
  })

  test('should not be animated if no striped but  animated property', () => {
    const { container } = render(
      <ProgressBar animated='true'>content</ProgressBar>
    )
    expect(container.firstChild).not.toHaveClass('animate')
  })

  test('should have color', () => {
    const { container } = render(
      <ProgressBar color='#fff'>content</ProgressBar>
    )
    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#fff'
    })
  })
})
