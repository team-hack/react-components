import React from 'react'

import { Divider } from './Divider'

export default {
  title: 'Example/Divider',
  component: Divider,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Divider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Divider'
}

export const Thin = Template.bind({})
Thin.args = {
  thick:'thin',
  label: 'Divider'
}

export const Medium = Template.bind({})
Medium.args = {
  thick: 'medium',
  label: 'Divider'
}

export const Thick = Template.bind({})
Thick.args = {
  thick: 'thick',
  label: 'Divider'
}

export const Light = Template.bind({})
Light.args = {
  strength: 'light',
  label: 'Divider'
}

export const Dark = Template.bind({})
Dark.args = {
  strength: 'dark',
  label: 'Divider'
}