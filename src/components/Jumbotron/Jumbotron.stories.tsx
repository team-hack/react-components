import React from 'react';
import { Jumbotron } from './Jumbotron';

export default {
  component: Jumbotron,
  title: 'Jumbotron',
  argTypes: {
    fluid: {
      control: {
        type: 'select',
        options: [true, false]
      }
    }
  }
};

export const Basic = (args) => {
  return (
    <Jumbotron {...args}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi illo
        sunt incidunt iusto, fuga ea aspernatur temporibus consequatur
        distinctio quibusdam? Ea laborum numquam aspernatur asperiores nihil
        deleniti repellendus eos quis?
      </p>
    </Jumbotron>
  );
};

Basic.args = {
  fluid: false
};
