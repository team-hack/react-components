import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Spinner } from '../Spinner';

describe('Spinner component', () => {
  test('it renders the Spinner Component', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveClass('loader');
  });

  test('Spinner is reversed if reverse prop is passed in', () => {
    const { container } = render(<Spinner reversed={true} />);
    expect(container.firstChild).toHaveClass('reversed');
  });

  test('Spinner is reversed if reverse prop is passed in', () => {
    const { container } = render(<Spinner reversed={true} />);
    expect(container.firstChild).toHaveClass('reversed');
  });

  test('Spinner speed is fast if speed prop passed in', () => {
    const { container } = render(<Spinner speed='fast' />);
    expect(container.firstChild).toHaveClass('fast');
  });

  test('Spinner should have color of prop passed in', () => {
    const { container } = render(<Spinner color='#79CE90' size='large' />);
    expect(container.firstChild).toHaveStyle({
      borderTop: `6px solid #79CE90`
    });
  });
});
