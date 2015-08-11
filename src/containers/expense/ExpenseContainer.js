import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import {currentExpense, currentExpenseNonParticipants, currentExpenseParticipants} from '../../selectors'
import * as projectActions from '../../actions/projectActions'
import AddExpenseParticipant from '../../components/add-expense-participant/AddExpenseParticipant'
import Expense from '../../components/expense/Expense'
import ExpenseParticipantList from '../../components/expense-participant-list/ExpenseParticipantList'
import React, {PropTypes} from 'react'

@connect(createSelector(
  [
    state => state.location,
    currentExpense,
    currentExpenseNonParticipants,
    currentExpenseParticipants
  ],
  (location, expense, nonParticipants, participants) => ({location, expense, nonParticipants, participants})
))
export default class ExpenseContainer {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    expense: PropTypes.object.isRequired,
    nonParticipants: PropTypes.array.isRequired,
    participants: PropTypes.array.isRequired
  }

  removeParticipant (excludedMemberSlug) {
    const {location, dispatch} = this.props
    const {projectId, memberSlug, expenseSlug} = location.params
    const {excludeMemberFromExpense} = bindActionCreators(projectActions, dispatch)
    excludeMemberFromExpense(projectId, memberSlug, expenseSlug, excludedMemberSlug)
  }

  includeParticipant (includedMemberSlug) {
    const {location, dispatch} = this.props
    const {projectId, memberSlug, expenseSlug} = location.params
    const {includeMemberInExpense} = bindActionCreators(projectActions, dispatch)
    includeMemberInExpense(projectId, memberSlug, expenseSlug, includedMemberSlug)
  }

  render () {
    const {expense, nonParticipants, participants} = this.props
    return (
      <Expense name={expense.name} amount={expense.amount}>
        <ExpenseParticipantList participants={participants} removeParticipant={::this.removeParticipant}/>
        <AddExpenseParticipant nonParticipants={nonParticipants} includeParticipant={::this.includeParticipant}/>
      </Expense>
    )
  }
}
