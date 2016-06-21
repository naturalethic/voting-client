import React, { Component, PropTypes } from 'react'

export default class Voting extends Component {
  static propTypes = {
    pair: PropTypes.arrayOf(PropTypes.string).isRequired,
  }
  getPair() {
    return this.props.pair || []
  }
  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}>
            <h1>{entry}</h1>
          </button>
        )}
      </div>
    )
  }
}
