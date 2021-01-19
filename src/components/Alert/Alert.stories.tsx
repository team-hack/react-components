import React from 'react'

import { Alert }  from './Alert'

export default {
    title: 'Alert',
    component: Alert,
    argTypes: {
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
        borderRadius: {
            control: {
                type: 'range',
                min: 0,
                max: 50,
                step: 1
            }
        },
        darkMode: { control: 'boolean'},
        align: {
            control: {
                type: 'select',
                options: ['left', 'center', 'right']
            }
        },
        type: {
            control: {
                type: 'select',
                options: ['primary', 'warning', 'info', 'success', 'outline', 'vaporwave']
            }
        }
    }
}
  
const Template = (args) => (
    <Alert {...args} />
)
  
export const Primary = Template.bind({})
Primary.args = {
    text: `A Primary Alert`,
    align: `center`,
    borderRadius: 4,
    type: `primary`
}

export const Warning = Template.bind({})
Warning.args = {
    text: `This is a warning.`,
    align: `center`,
    borderRadius: 4,
    type: `warning`
}


export const Info = Template.bind({})
Info.args = {
    text: `Some important info`,
    align: `center`,
    borderRadius: 4,
    type: `info`
}

export const Success = Template.bind({})
Success.args = {
    text: `This message was a success`,
    align: `center`,
    borderRadius: 4,
    type: `success`
}

export const Outline = Template.bind({})
Outline.args = {
    text: `An outlined alert`,
    align: `center`,
    borderRadius: 4,
    type: `outline`
}

export const Vaporwave = Template.bind({})
Vaporwave.args = {
    text: `Vaporwave Alert`,
    align: `center`,
    borderRadius: 4,
    type: `vaporwave`
}
