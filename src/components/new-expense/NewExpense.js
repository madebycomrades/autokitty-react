import React, {Component, PropTypes} from 'react'

export default class NewMember extends Component {

  static propTypes = {
    createExpense: PropTypes.func.isRequired,
    projectId: PropTypes.string.isRequired,
    memberSlug: PropTypes.string.isRequired
  }

  state = {name: null}

  onChange (e) {
    this.setState({name: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.createExpense(this.props.projectId, this.props.memberSlug, this.state.name)
    this.setState({name: null})
  }

  render () {
    var name = this.state.name
    return (
      <div>
        <form onSubmit={::this.onSubmit}>
          <input autoFocus='true' type='text' value={name} placeholder='Add an expense' onChange={::this.onChange}/>
          <input type='submit' value='Add'/>
        </form>
      </div>
    )
  }
}
