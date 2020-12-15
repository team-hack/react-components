import React from 'react'
import { Progress, ProgressBar } from './Progress'

export default {
  component: Progress,
  title: 'Progress',
  argTypes: {
    color: { control: 'color' },
    striped: {
      control: {
        type: 'select',
        options: ['true', 'false']
      }
    },
    animated: {
      control: {
        type: 'select',
        options: ['true', 'false']
      }
    }
  }
}

export const Basic = (args) => (
  <Progress {...args}>
    <ProgressBar {...args} style='width: 85%'>
      {args.width}
    </ProgressBar>
  </Progress>
)

Basic.args = {
  striped: 'false',
  width: '85%',
  animated: 'false'
}

export const Thin = (args) => (
  <Progress {...args} style='height: 3px !important'>
    <ProgressBar {...args} style='width: 35%' />
  </Progress>
)
