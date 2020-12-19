import React from 'react'

import { List } from './List.js'

export default {
  title: 'Example/List',
  component: List,
  argTypes: {}
}

const Template = (args) => <List {...args} />

export const IsOrdered = Template.bind({})
IsOrdered.args = {
  isOrdered: true
}

export const Numbers = Template.bind({})
Numbers.args = {
  listItems: [3,4, 5]
}

export const Alphabet = Template.bind({})
Alphabet.args = {
  listItems: ['a','b','c'],
  isOrdered: true
}