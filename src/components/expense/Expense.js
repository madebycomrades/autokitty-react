import React, {Component, PropTypes} from 'react'

export default class Expense extends Component {

  static propTypes = {
    children: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired
  }

  render () {
    const {name, amount} = this.props
    return (
      <div>
        <h3>{name} £{amount}</h3>
        {this.props.children}
      </div>
    )
  }
}
