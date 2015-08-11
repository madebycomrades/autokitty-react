import MemberList from '../member-list/MemberList'
import NewMember from '../new-member/NewMember.js'
import React, {Component, PropTypes} from 'react'

export default class ProjectOverview extends Component {

  static propTypes = {
    members: PropTypes.array.isRequired,
    projectId: PropTypes.string.isRequired,
    createMember: PropTypes.func.isRequired,
    balancesMap: PropTypes.instanceOf(Map)
  }

  render () {
    const {members, projectId, createMember, balancesMap} = this.props
    return (
      <div>
        <MemberList members={members} projectId={projectId} balancesMap={balancesMap}/>
        <NewMember createMember={createMember} projectId={projectId}/>
      </div>
    )
  }
}
