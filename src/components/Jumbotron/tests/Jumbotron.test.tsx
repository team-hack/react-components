import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Jumbotron } from '../Jumbotron';

describe('Jumbtron component', () => {
  test('Jumbotron component can nest content', () => {
    const { container } = render(
      <Jumbotron>
        <div className='inner-content'></div>
      </Jumbotron>
    );
    expect(container.firstChild.firstChild).toHaveClass('inner-content');
  });

  test('fluid prop should stretch entire width', () => {
    const { container } = render(
      <Jumbotron fluid={true}>
        <p>hello</p>
      </Jumbotron>
    );

    expect(container.firstChild).toHaveClass('fluid');
  });
});
