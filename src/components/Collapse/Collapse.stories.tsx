import React, { useRef } from 'react';
import { Collapse } from './Collapse';
import { Card, CardBody, CardHeader } from '../Card/Card';

export default {
  component: Collapse,
  title: 'Collapse'
};

export const Basic = (args) => {
  const ref = React.createRef();
  return (
    <Collapse {...args}>
      <button
        type='button'
        data-toggle='collapse'
        data-target='collapseExample'
      >
        Collapse with Button
      </button>

      <div className='collapse' id='collapseExample'>
        <div className=''>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </Collapse>
  );
};

export const BasicCard = (args) => (
  <div>
    <Card>
      <Collapse {...args}>
        <div data-toggle='collapse' data-target='collapseExample'>
          <CardHeader text='Collapse with Card' />
        </div>

        <div id='collapseExample'>
          <CardBody>
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </p>
          </CardBody>
        </div>
      </Collapse>
    </Card>
  </div>
);

export const Accordion = (args) => (
  <Card>
    <Collapse {...args}>
      <div
        style={{
          backgroundColor: 'rgb(245,245,245)',
          borderBottom: '1px solid rgb(211,211,211)',
          padding: '20px'
        }}
        data-toggle='collapse'
        data-target='collapseExample1'
      >
        Accordion Section One
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
        data-target='collapseExample2'
      >
        Accordion Section Two
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
