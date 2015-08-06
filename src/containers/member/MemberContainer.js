import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import {memberSelector, expensesSelector} from '../../selectors'
import * as projectActions from '../../actions/projectActions'
import ExpenseContainer from '../expense/ExpenseContainer'
import Member from '../../components/member/Member'
import MemberOverview from '../../components/member-overview/MemberOverview.js'
import React, {PropTypes} from 'react'

@connect(createSelector(
  [memberSelector, expensesSelector, state => state.location],
  (member, expenses, location) => ({member, location, expenses})
))
export default class MemberContainer {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    member: PropTypes.object.isRequired,
    expenses: PropTypes.array.isRequired
  }

  render () {
    const {member, location} = this.props
    const {name} = member
    const {projectId, memberSlug} = location.params
    const child = location.name === 'member' ? ::this.renderMemberOverview : ::this.renderExpenseContainer
    return (
      <Member projectId={projectId} memberSlug={memberSlug} name={name}>
        {child()}
      </Member>
    )
  }

  renderMemberOverview () {
    const {expenses, location, dispatch} = this.props
    const {projectId, memberSlug} = location.params
    const {createExpense} = bindActionCreators(projectActions, dispatch)
    return <MemberOverview expenses={expenses} projectId={projectId} memberSlug={memberSlug} createExpense={createExpense}/>
  }

  renderExpenseContainer () {
    return <ExpenseContainer/>
  }
}
