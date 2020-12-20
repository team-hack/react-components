import React from 'react'

import { Alert }  from './Alert'

export default {
    title: 'Alert',
    component: Alert,
  }
  
const Template = (args) => (
    <Alert {...args} />
)
  
export const Primary = Template.bind({})

Primary.args = {
    text: `I'm the alert`,
    align: `center`,
}


export const Outline = Template.bind({})

Outline.args = {
    text: `Hey now hey now`,
    type: `outline`
}