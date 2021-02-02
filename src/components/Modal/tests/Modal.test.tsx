import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Modal, ModalHeader, ModalFooter, ModalBody } from '../Modal';

let container;
describe('Modal component', () => {
  beforeEach(() => {
    const result = render(
      <Modal open={true} onClose={() => {}}>
        <ModalHeader text='Do you want to continue?' />
        <ModalBody align='left'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rerum
            consequatur accusamus fuga iure laudantium, inventore aliquam animi
            facilis soluta, exercitationem nihil quasi blanditiis ex aut error
            placeat dolorum voluptate.
          </p>
        </ModalBody>
        <ModalFooter align='left'>
          <div>
            <button onClick={() => {}}>Accept</button>
            <button onClick={() => {}}>Cancel</button>
          </div>
        </ModalFooter>
      </Modal>
    );

    container = result.container;
  });

  test.skip('collapse component can nest components', () => {
    expect(container).toHaveClass('modal-background');
  });
});
