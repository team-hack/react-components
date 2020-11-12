import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
// import './icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

import ErrorBoundary from './ErrorBoundary'

/**
 * Primary UI component for user interaction
 */
// export const Icon = ({ name, size, animation, weight, ...props }) => {
//   return <FontAwesomeIcon icon={name} size={size} {...props} />
// }

export const Icon = ({ name, size }) => {
  // const capName = name.ChartAt(0).toUpperCase() + name.slice(1)
  const MyLazyLoaded = React.lazy(() => {
    // console.log('debug')
    // console.log(name)
    // console.log(size)
    import('@fortawesome/free-solid-svg-icons/' + name + '.js')
      .then((icon) => {
        console.log(`fulfilled!`)
        console.log(`icon name: ${icon.iconName}`)
        return (
          <div>
            hello
            {/* <FontAwesomeIcon icon={icon} size={size} /> */}
          </div>
        )
      })
      .catch((err) => console.log(err))
  })
  return (
    <div>
      <h1>Hello!</h1>
      <FontAwesomeIcon icon={faSmile} />
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <MyLazyLoaded />
          <div>Loaded</div>
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

Icon.propTypes = {
  /**
   * What is the icon name/type
   */
  name: PropTypes.string,
  /**
   * What background color to use
   */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'lg',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x'
  ]),
  /**
   * What animation
   */
  animation: PropTypes.oneOf(['spin', 'pulse']),
  /**
   * What weight
   */
  weight: PropTypes.oneOf(['fal', 'far', 'fas', 'fad'])
}

Icon.defaultProps = {
  name: 'coffee',
  size: '1x'
}
