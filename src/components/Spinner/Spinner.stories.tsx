import React from 'react';
import { Spinner } from './Spinner';

export default {
  component: Spinner,
  title: 'Spinner',
  argTypes: {
    color: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small']
      }
    },
    reversed: {
      control: {
        type: 'select',
        options: [true, false]
      }
    },
    speed: {
      control: {
        type: 'select',
        options: ['slow', 'normal', 'fast']
      }
    }
  }
};

export const Basic = (args) => <Spinner {...args} />;

Basic.args = {
  color: '#79CE90',
  size: 'large',
  speed: 'normal',
  reversed: false
};
