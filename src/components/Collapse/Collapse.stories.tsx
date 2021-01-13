import React from 'react';
import { Collapse } from './Collapse';

export default {
  component: Collapse,
  title: 'Collapse',
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right']
      }
    }
  }
};

export const Basic = (args) => (
  <div>
    <Collapse {...args}>
      <button
        className='btn btn-primary'
        type='button'
        data-toggle='collapse'
        data-target='#collapseExample'
        aria-expanded='false'
        aria-controls='collapseExample'
      >
        Button with data-target
      </button>

      <div className='collapse' id='collapseExample'>
        <div className='card card-body'>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </Collapse>
  </div>
);

Basic.args = {
  align: ['left', 'center', 'right'],
  imageSource: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
  width: '300'
};
