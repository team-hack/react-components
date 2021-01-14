import React from 'react';
import { Collapse } from './Collapse';
import { Card } from '../Card/Card';

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
      <Card>
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
      </Card>
    </Collapse>
  </div>
);

Basic.args = {
  align: ['left', 'center', 'right'],
  imageSource: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
  width: '300'
};

export const Accordian = (args) => (
  <Card>
    <Collapse {...args}>
      <div
        style={{
          backgroundColor: 'rgb(245,245,245)',
          borderBottom: '1px solid rgb(211,211,211)',
          padding: '20px'
        }}
        data-toggle='collapse'
        data-target='#collapseExample1'
        aria-expanded='false'
        aria-controls='collapseExample'
      >
        Button with data-target
      </div>

      <div className='collapse' id='collapseExample1'>
        <div
          style={{
            padding: '10px'
          }}
        >
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </Collapse>
    <Collapse {...args}>
      <div
        style={{
          backgroundColor: 'rgb(245,245,245)',
          borderBottom: '1px solid rgb(211,211,211)',
          padding: '20px'
        }}
        data-toggle='collapse'
        data-target='#collapseExample2'
        aria-expanded='false'
        aria-controls='collapseExample'
      >
        Button with data-target
      </div>

      <div className='collapse' id='collapseExample2'>
        <div
          style={{
            padding: '10px'
          }}
        >
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </Collapse>
  </Card>
);
