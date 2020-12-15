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
    <ProgressBar {...args}>{args.label}</ProgressBar>
  </Progress>
)

Basic.args = {
  striped: false,
  width: '25%',
  animated: 'false',
  label: '',
  color: 'rgb(43, 194, 83)'
}

export const Thin = (args) => (
  <Progress {...args}>
    <ProgressBar {...args} />
  </Progress>
)

Thin.args = {
  height: '3px',
  striped: false,
  width: '25%',
  animated: 'false',
  label: '',
  color: 'rgb(43, 194, 83)'
}
