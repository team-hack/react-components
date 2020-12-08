import React from 'react'
import PropTypes from 'prop-types'

{/* <List listItems={[]} isOrdered = {false}>  */}

export const List = (props) => {

    if (isOrdered) {
      return (
        <ol>
        {props.listItems.map((listItem, i) => {
          return (
            <li>{listItem}</li>
          )
        }) }
      </ol>
      ) 
    }
      return (
      <ul>
      {props.listItems.map((listItem, i) => {
        return (
          <li>{listItem}</li>
        )
      }) }
    </ul>

    )
  } 