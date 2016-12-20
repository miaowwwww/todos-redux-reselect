import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick, changeColor, color }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <span>
      <a href="#"
        style={{'color': color ? 'red' : 'yellow'}}
        onClick={e => {
          e.preventDefault()
          onClick()
        } }
        >
        {children}
      </a>
      <button onClick={e => {
        e.preventDefault()
        changeColor()
      } }
        >
        changeColor
     </button>
    </span>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
