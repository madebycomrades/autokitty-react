import ExpenseList from '../expense-list/ExpenseList'
import NewExpense from '../new-expense/NewExpense.js'
import React, {Component, PropTypes} from 'react'

export default class MemberOverview extends Component {

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    projectId: PropTypes.string.isRequired,
    memberSlug: PropTypes.string.isRequired,
    createExpense: PropTypes.func.isRequired
  }

  render () {
    const {expenses, projectId, memberSlug, createExpense} = this.props
    return (
      <div>
        <ExpenseList expenses={expenses} projectId={projectId} memberSlug={memberSlug}/>
        <NewExpense createExpense={createExpense} projectId={projectId} memberSlug={memberSlug}/>
      </div>
    )
  }
}
