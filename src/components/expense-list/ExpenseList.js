import React, {Component, PropTypes} from 'react'
import Link from '../link/Link'

export default class ExpenseList extends Component {

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    projectId: PropTypes.string.isRequired,
    memberSlug: PropTypes.string.isRequired
  }

  render () {
    const {expenses, projectId, memberSlug} = this.props
    const NoExpenses = <p>This member has no expenses. Add some below...</p>
    const TheList = (
      <ul>
        {expenses.map(expense => {
          return (
            <li key={expense.slug}>
              <Link route='expense' params={{projectId, memberSlug, expenseSlug: expense.slug}}>{expense.name}</Link>
            </li>
          )
        })}
      </ul>
    )
    return expenses.length > 0 ? TheList : NoExpenses
  }
}
