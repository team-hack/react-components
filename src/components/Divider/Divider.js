import React from 'react'
import PropTypes from 'prop-types'
import './divider.css'

/**
 * Primary UI component for user interaction
 */
export const Divider = ({ strength, thick, ...props }) => {

  return (
    <hr
      className={['storybook-divider', `storybook-divider--${thick}`, `storybook-divider--${strength}`].join(
        ' '
      )}
      {...props}
      />
  )
}

Divider.propTypes = {
  /**
   * How thick should the Divider be?
   */
  thick: PropTypes.oneOf(['thin', 'medium', 'thick']),
  /**
   * light or dark line?
   */
  strength: PropTypes.oneOf(['light', 'dark']),
}

Divider.defaultProps = {
  thick: null,
  strength: null,
}
