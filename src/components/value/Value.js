import React, {Component, PropTypes} from 'react'

export default class Project extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    symbol: PropTypes.string,
    scale: PropTypes.number
  }

  static defaultProps = {
    value: 0,
    symbol: '£',
    scale: 2
  }

  render () {
    const {value, symbol, scale} = this.props
    return <span>{symbol}{value.toFixed(scale)}</span>
  }
}
