import React, {Component, PropTypes} from 'react'

export default class Expense extends Component {

  static propTypes = {
    children: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    const {name} = this.props
    return (
      <div>
        <h3>{name} £X.XX</h3>
        {this.props.children}
      </div>
    )
  }
}
