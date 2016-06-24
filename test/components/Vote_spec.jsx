import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Vote from '../../src/components/Vote'

describe('Vote', () => {
  it('renders a pair of buttons', () => {
    const wrapper = shallow(
      <Vote pair={['Trainspotting', '28 Days Later']} />
    )
    const buttons = wrapper.find('button')
    expect(buttons.length).to.equal(2)
    expect(buttons.at(0).text()).to.equal('Trainspotting')
    expect(buttons.at(1).text()).to.equal('28 Days Later')
  })

  it('invokes callback when a button is clicked', () => {
    let votedWith
    const vote = (entry) => {
      votedWith = entry
    }
    const wrapper = shallow(
      <Vote pair={['Trainspotting', '28 Days Later']} vote={vote} />
    )
    wrapper.find('button').first().simulate('click')
    expect(votedWith).to.equal('Trainspotting')
  })

  it('disables buttons when user has voted', () => {
    const wrapper = shallow(
      <Vote pair={['Trainspotting', '28 Days Later']} hasVoted="Trainspotting" />
    )
    expect(wrapper.find('button').everyWhere(n => n.prop('disabled'))).to.equal(true)
  })

  it('does not disable buttons when user has not voted', () => {
    const wrapper = shallow(
      <Vote pair={['Trainspotting', '28 Days Later']} />
    )
    expect(wrapper.find('button').everyWhere(n => n.prop('disabled'))).to.equal(false)
  })

  it('adds label to the voted entry', () => {
    const wrapper = shallow(
      <Vote pair={['Trainspotting', '28 Days Later']} hasVoted="Trainspotting" />
    )
    expect(wrapper.find('button').at(0).text()).to.contain('Voted')
  })
})
