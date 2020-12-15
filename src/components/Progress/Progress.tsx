import React from 'react'
import './progress.css'

interface ProgressProps {
  children?: string
  style?: string
  color?: string
  striped?: string
  animated?: string
  width?: string
  // title?: string
  // imageSource?: string
  // bold?: boolean
  // text?: string
  // align?: string
}

function populateStyleString(props) {
  let str = ''
  Object.keys(props).map((item) => {
    if (item === 'children') {
      return
    }
    if (item === 'align' || item === 'position') {
      str += `${props[item]} `
    } else {
      str += `${item} `
    }
  })

  return str
}

const Progress = ({ children, style }: ProgressProps): JSX.Element => {
  console.log(children)
  let heightRule = ''
  if (typeof style === 'string') {
    heightRule = style.split(' ')[1]
  }
  // if children and are of type ProgressBar
  return (
    <div className='progress' style={{ height: heightRule }}>
      {children}
    </div>
  )
}

const ProgressBar = ({
  children,
  style,
  color,
  striped,
  animated,
  width
}: ProgressProps): JSX.Element => {
  let widthRule = '25%'
  let colorRule = 'fff'
  let additionalClass = ''

  // if (typeof style === 'string') {
  //   widthRule = style.split(' ')[1]
  // }

  // if (typeof style === 'string') {
  //   widthRule = style.split(' ')[1]
  // }
  if (typeof color === 'string') {
    colorRule = color
  }
  if (typeof striped === 'string' && striped === 'true') {
    additionalClass += 'progress-bar-striped '
  }

  if (typeof width === 'string') {
    console.log(';;w', width)
    widthRule = width
  }

  if (typeof width === 'string' && striped === 'true') {
    widthRule = width
  }

  if (
    typeof animated === 'string' &&
    striped === 'true' &&
    animated === 'true'
  ) {
    console.log('anim')
    additionalClass += 'animate '
  }
  // if (style && style.width) {
  //   widthRule = style.split(' ').[1]
  // }

  return (
    <div
      className={`progress-bar ${additionalClass}`}
      style={{ width: widthRule, backgroundColor: color }}
    >
      <span>{children}</span>
    </div>
  )
}

export { Progress, ProgressBar }
