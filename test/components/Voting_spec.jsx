import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Voting from '../../src/components/Voting'
import Winner from '../../src/components/Winner'
import Vote from '../../src/components/Vote'

describe('Voting', () => {
  it('renders just the winner when there is one', () => {
    const wrapper = shallow(
      <Voting winner="Trainspotting" />
    )
    expect(wrapper.find(Winner).length).to.equal(1)
    expect(wrapper.find(Vote).length).to.equal(0)
  })
})
