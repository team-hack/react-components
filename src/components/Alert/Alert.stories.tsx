import React from 'react'

import { Alert }  from './Alert'

export default {
    title: 'Alert',
    component: Alert,
  }
  
const Template = (args) => <Alert {...args} />
  
export const Primary = Template.bind({})

Primary.args = {
    title: `I'm the alert`
}


export const Secondary = Template.bind({})

Secondary.args = {
    title: `Hey now hey now`
}