import React, {Component, PropTypes} from 'react'
import Link from '../link/Link'
import Value from '../value/Value'

export default class MemberList extends Component {

  static propTypes = {
    members: PropTypes.array,
    projectId: PropTypes.string,
    balancesMap: PropTypes.instanceOf(Map)
  }

  render () {
    const {members, projectId, balancesMap} = this.props
    const NoMembers = <p>Your project has no members. Add some below...</p>
    const TheList = (
      <ul>
        {members.map(member => {
          const balance = balancesMap.get(member.slug)
          const summary = balance.inCredit ? 'In credit ' : 'In debt '
          return (
            <li key={member.slug}>
              <Link route='member' params={{projectId, memberSlug: member.slug}}>{member.name}</Link>
              <ul>
                <li><strong>{summary} <Value value={balance.balance}/></strong></li>
                <li>Spent <Value value={balance.spent}/></li>
                <li>Owes <Value value={balance.owes}/></li>
              </ul>
            </li>
          )
        })}
      </ul>
    )
    return members.length > 0 ? TheList : NoMembers
  }
}
