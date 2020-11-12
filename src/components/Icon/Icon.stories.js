import React from 'react'

import { Icon } from './Icon'

export default {
  title: 'Example/Icon',
  component: Icon
}

const Template = (args) => <Icon {...args} />

export const Coffee = Template.bind({})
Coffee.args = {
  name: 'faCoffee',
  size: '1x'
}

export const Huge = Template.bind({})
Huge.args = {
  name: 'coffee',
  size: '10x'
}
