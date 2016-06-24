import React, { Component, PropTypes } from 'react'

export default class Vote extends Component {
  static propTypes = {
    pair: PropTypes.arrayOf(PropTypes.string).isRequired,
    vote: PropTypes.func,
    hasVoted: PropTypes.string,
  }
  getPair() {
    return this.props.pair || []
  }
  isDisabled() {
    return !!this.props.hasVoted
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry
  }
  render() {
    return (
      <div className="vote">
        {this.getPair().map(entry =>
          <button
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}
          >
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ? <div className="label">Voted</div> : null}
          </button>
        )}
      </div>
    )
  }
}
