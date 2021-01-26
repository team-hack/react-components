import React from 'react';
import {
  Card,
  CardImage,
  CardImageContainer,
  CardTitle,
  ListGroup,
  ListItem,
  CardBody,
  CardHeader,
  CardFooter,
  CardImageOverlay
} from './Card';

export default {
  component: Card,
  title: 'Card',
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right']
      }
    },
    position: {
      control: {
        type: 'select',
        options: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
      }
    },
    width: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 10
      }
    },
    imageHeight: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 10
      }
    }
  }
};

export const Basic = (args) => (
  <Card {...args}>
    <CardImage {...args} />
    <CardBody {...args}>
      <h3>What is Team Hack?</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </CardBody>
  </Card>
);

Basic.args = {
  align: 'left',
  imageSource: '',
  width: 300,
  imageHeight: 200
};

export const HeaderAndFooter = (args) => (
  <Card {...args}>
    <CardImageContainer>
      <CardImage {...args} />
      <CardImageOverlay {...args}>
        <p>Title</p>
        <p>Sub Title</p>
      </CardImageOverlay>
    </CardImageContainer>

    <CardHeader text='Header' {...args} />
    <CardFooter text='Footer' {...args} />
    <ListGroup>
      <ListItem text='item 1' {...args} />
      <ListItem text='item 2' {...args} />
    </ListGroup>
  </Card>
);

HeaderAndFooter.args = {
  align: 'left',
  imageSource: '',
  width: '300',
  imageHeight: 200,
  position: 'top-right'
};

export const ImageOverlay = (args) => (
  <Card {...args}>
    <div style={{ position: 'relative' }}>
      <CardImage {...args} />
      <CardImageOverlay {...args}>
        <h3>Title</h3>
        <p>Sub title</p>
      </CardImageOverlay>
    </div>

    <CardBody>
      <h4>What is Team Hack?</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </CardBody>

    <ListGroup>
      <ListItem text='item 1' />
      <ListItem text='item 2' />
    </ListGroup>
  </Card>
);

ImageOverlay.args = {
  imageSource: '',
  width: '300',
  imageHeight: 200,
  position: 'bottom-left'
};

export const List = (args) => (
  <Card {...args}>
    <ListGroup>
      <ListItem text='item 1' />
      <ListItem text='item 2' />
      <ListItem text='item 3' />
    </ListGroup>
  </Card>
);

List.args = {
  align: 'left',
  width: '300'
};

export const Combination = (args) => (
  <Card {...args}>
    <CardHeader text='Header' />
    <CardImage {...args} />
    <CardFooter text='Footer' />
  </Card>
);

Combination.args = {
  imageSource: '',
  width: '300',
  imageHeight: 200,
  align: 'left'
};

export const ImageBottom = (args) => (
  <Card {...args}>
    <CardHeader text='Header' />
    <CardImage {...args} />
  </Card>
);

ImageBottom.args = {
  align: 'left',
  imageSource: '',
  imageHeight: 200,
  width: 300
};
