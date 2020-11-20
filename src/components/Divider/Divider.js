import React from 'react'
import PropTypes from 'prop-types'
import './divider.css'

/**
 * Primary UI component for user interaction
 */
export const Divider = ({ primary, color, strength, thick, label, ...props }) => {
  const mode = primary
    ? 'storybook-Divider--primary'
    : 'storybook-Divider--secondary'

  return (
    <hr
      className={['storybook-divider', `storybook-divider--${thick}`, `storybook-divider--${strength}`, mode].join(
        ' '
      )}
      style = {color && {color}}
      {...props}
      />
  )
}

Divider.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  color: PropTypes.string,
  /**
   * How thick should the Divider be?
   */
  thick: PropTypes.oneOf(['thin', 'medium', 'thick']),
  /**
   * light or dark line?
   */
  strength: PropTypes.oneOf(['light', 'dark']),
  /**
   * Divider contents
   */
  label: PropTypes.string.isRequired,
}

Divider.defaultProps = {
  backgroundColor: null,
  primary: false,
  thick: 'medium',
  strength: null,
}
