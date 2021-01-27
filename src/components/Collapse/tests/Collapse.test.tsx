import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Collapse } from '../Collapse';

let container;
describe('Collapse component', () => {
  beforeEach(() => {
    const result = render(
      <Collapse>
        <div data-toggle='collapse' data-target='collapseExample'>
          <button>collapse with button</button>
        </div>
        <div id='collapseExample'>
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </Collapse>
    );

    container = result.container;
  });

  test('collapse component can nest components', () => {
    expect(container.firstChild).toHaveTextContent('collapse with button');
    expect(container.lastChild).toHaveClass('collapse');

    userEvent.click(screen.getByText('collapse with button'));
    expect(container.lastChild).toHaveClass('open');
  });

  test('collapse component is closed on initial state', () => {
    expect(container.lastChild).toHaveClass('collapse');
  });

  test('collapse component opens when clicked', () => {
    userEvent.click(screen.getByText('collapse with button'));
    expect(container.lastChild).toHaveClass('open');
  });
});
