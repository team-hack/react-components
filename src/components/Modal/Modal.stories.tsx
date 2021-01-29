import React from 'react';
import { Modal } from './Modal';

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

export const Basic = (args) => <Modal open={true} />;

Basic.args = {
  striped: 'false',
  width: '25%',
  animated: 'false',
  label: '',
  color: 'rgb(43, 194, 83)',
  height: '25px'
};
