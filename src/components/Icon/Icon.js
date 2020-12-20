import React from "react"
import PropTypes from "prop-types"
import "@fortawesome/fontawesome-free/css/all.css"

export const Icon = ({
  name,
  size = `1x`,
  animation = null,
  rotate = null,
  border = false,
  isBrandIcon = false
}) => {
  const options = (name, size, animation, rotate, border, isBrandIcon) => {
    const optionArray = [`fa-${name}`, `fa-${size}`]
    if (isBrandIcon) {
      optionArray.push("fab")
    } else {
      optionArray.push("fas")
    }
    if (animation) {
      optionArray.push(`fa-${animation}`)
    }
    if (rotate) {
      optionArray.push(`fa-${rotate}`)
    }
    if (border) {
      optionArray.push(`fa-border`)
    }
    return optionArray.join(` `)
  }

  return (
    <div>
      <i
        className={`${options(
          name,
          size,
          animation,
          rotate,
          border,
          isBrandIcon
        )}`}
      />
    </div>
  )
}

Icon.propTypes = {
  /**
   * The the icon name from list: https://fontawesome.com/cheatsheet
   * (required)
   * If it's a brand icon, the isBrandIcon prop needs to be true
   */
  name: PropTypes.string.isRequired,
  /**
   * What Size? (optional)
   */
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "lg",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x"
  ]),
  /**
   * What animation? (optional)
   */
  animation: PropTypes.oneOf(["spin", "pulse", null]),
  /**
   * What rotation? (optional)
   */
  rotate: PropTypes.oneOf([
    "rotate-90",
    "rotate-180",
    "rotate-270",
    "flip-horizontal",
    "flip-vertical",
    "flip-both",
    null
  ]),
  /**
   * With border? (optional)
   */
  border: PropTypes.bool,
  /**
   * Is it a brand icon? (optional)
   */
  isBrandIcon: PropTypes.bool
}

Icon.defaultProps = {
  name: "coffee",
  size: "1x",
  animation: null,
  rotate: null,
  border: false,
  isBrandIcon: false
}
