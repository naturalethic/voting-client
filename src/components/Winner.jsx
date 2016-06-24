import React, { PropTypes } from 'react'

export default function Winner(props) {
  return (
    <div className="winner">
      Winner is {props.winner}
    </div>
  )
}

Winner.propTypes = {
  winner: PropTypes.string.isRequired,
}
