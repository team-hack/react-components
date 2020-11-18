import React from 'react'

import { Icon } from './Icon'

export default {
  title: 'Example/Icon',
  component: Icon
}

const Template = (args) => <Icon {...args} />

export const Coffee = Template.bind({})
Coffee.args = {
  name: 'coffee',
  size: '1x',
  animation: null,
  rotate: null,
  border: false
}

export const UpsideDownCoffee = Template.bind({})
UpsideDownCoffee.args = {
  name: 'coffee',
  size: '1x',
  animation: null,
  rotate: 'rotate-180',
  border: false
}

export const HugeCoffee = Template.bind({})
HugeCoffee.args = {
  name: 'coffee',
  size: '10x',
  animation: null,
  rotate: null,
  border: false
}

export const Spinner = Template.bind({})
Spinner.args = {
  name: 'spinner',
  size: '5x',
  animation: 'spin',
  rotate: null,
  border: false
}

export const Loading = Template.bind({})
Loading.args = {
  name: 'spinner',
  size: '5x',
  animation: 'pulse',
  rotate: null,
  border: false
}
