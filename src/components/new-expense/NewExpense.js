import React, {Component, PropTypes} from 'react'

export default class NewExpense extends Component {

  static propTypes = {
    createExpense: PropTypes.func.isRequired,
    projectId: PropTypes.string.isRequired,
    memberSlug: PropTypes.string.isRequired
  }

  state = {name: null, amount: null}

  onNameChange (e) {
    this.setState({name: e.target.value})
  }

  onAmountChange (e) {
    this.setState({amount: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.createExpense(this.props.projectId, this.props.memberSlug, this.state.name, this.state.amount)
    this.setState({name: null, amount: null})
  }

  render () {
    const {name, amount} = this.state

    return (
      <div>
        <form onSubmit={::this.onSubmit}>
          <input autoFocus='true' type='text' value={name} placeholder='Add an expense' onChange={::this.onNameChange}/>
          <input type='number' value={amount} placeholder='Amount' onChange={::this.onAmountChange}/>
          <input type='submit' value='Add'/>
        </form>
      </div>
    )
  }
}
