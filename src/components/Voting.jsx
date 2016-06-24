import React, { PropTypes } from 'react'
import Winner from './Winner'
import Vote from './Vote'

export default function Voting(props) {
  return (
    <div>
    {props.winner ?
      <Winner winner={props.winner} /> :
      <Vote {...props} />}
    </div>
  )
}

Voting.propTypes = {
  winner: PropTypes.string,
}
