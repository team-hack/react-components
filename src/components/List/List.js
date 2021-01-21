import React from 'react'
import PropTypes from 'prop-types'
import './list.css'

export const List = ({isOrdered, listItems, ...props}) => {

    if (isOrdered) {
      return (
        <ol>
        {listItems.map((listItem, i) => {
          return (
            <li key={i} className={`storybook-li`}>{listItem}</li>
          )
        }) }
      </ol>
      ) 
    }
      return (
      <ul>
      {listItems.map((listItem, i) => {
        return (
          <li key={i} className={`storybook-li`}>{listItem}</li>
        )
      }) }
    </ul>

    )
  } 

  List.propTypes = { 
    // optional
    isOrdered: PropTypes.bool,
    listItems: PropTypes.array
  }

  List.defaultProps = {
    isOrdered: false,
    listItems: [1,2,3],
  }



  // create li linked item
  // create nested list