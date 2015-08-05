import Chrome from '../Chrome'
import Link from '../../link/Link'
import React from 'react/addons'
import {renderShallowTree} from '../../../../src/utils/testUtils'

describe('Chrome', () => {

  let output

  beforeEach(() => {
    ({output} = renderShallowTree(
      <Chrome messages={[]} removeMessage={() => {}}><p>content</p></Chrome>
    ))
  })

  it('renders four children', () => {
    expect(output.props.children.length).toBe(4)
  })

  it('renders a heading first', () => {
    expect(output.props.children[0].type).toBe('h1')
  })

  it('which contains a link home', () => {
    const heading = output.props.children[0]
    expect(heading.props.children).toEqual(<Link route='home'>AutoKitty</Link>)
  })

  it('renders a sub heading next', () => {
    expect(output.props.children[1].type).toBe('h4')
  })

  it('renders its children prop last', () => {
    expect(output.props.children[2]).toEqual(<p>content</p>)
  })
})
