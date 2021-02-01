import { Modal, ModalHeader, ModalBody, ModalFooter } from './Modal';
import { Button } from '../Button/Button';
import React, { useState, useEffect } from 'react';

export default {
  component: Modal,
  title: 'Modal',
  argTypes: {
    color: { control: 'color' },
    striped: {
      control: {
        type: 'select',
        options: ['true', 'false']
      }
    },
    animated: {
      control: {
        type: 'select',
        options: ['true', 'false']
      }
    }
  }
};

export const Basic = (args) => {
  const [showModal, setShowModal] = useState(true);
  // useEffect(() => {}, [showModal]);

  function processOnClick() {
    setShowModal(false);
    alert('Accept button pressed');
  }

  function cancel() {
    setShowModal(false);
    alert('Cancel button pressed');
  }
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ut
        est repellendus ab. Eaque vero ipsa asperiores provident, sed dolore
        iste error nemo voluptatum, deserunt vitae totam ea reprehenderit
        voluptates.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
        voluptate consequatur earum deleniti mollitia aliquam, quae distinctio
        culpa praesentium alias eveniet cum possimus! Sit saepe cupiditate
        adipisci optio dolorem qui.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
        voluptate consequatur earum deleniti mollitia aliquam, quae distinctio
        culpa praesentium alias eveniet cum possimus! Sit saepe cupiditate
        adipisci optio dolorem qui.
      </p>
      <Modal open={showModal}>
        <ModalHeader text='Do you want to continue?' />
        <ModalBody>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rerum
            consequatur accusamus fuga iure laudantium, inventore aliquam animi
            facilis soluta, exercitationem nihil quasi blanditiis ex aut error
            placeat dolorum voluptate.
          </p>
        </ModalBody>
        <ModalFooter>
          <div>
            <Button
              primary={true}
              label='Accept'
              onClick={() => processOnClick()}
            />
            <Button primary={false} label='Cancel' onClick={() => cancel()} />
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

Basic.args = {
  striped: 'false',
  width: '25%',
  animated: 'false',
  label: '',
  color: 'rgb(43, 194, 83)',
  height: '25px'
};
