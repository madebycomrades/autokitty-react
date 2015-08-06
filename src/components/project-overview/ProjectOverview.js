import MemberList from '../member-list/MemberList'
import NewMember from '../new-member/NewMember.js'
import React, {Component, PropTypes} from 'react'

export default class ProjectOverview extends Component {

  static propTypes = {
    members: PropTypes.array.isRequired,
    projectId: PropTypes.string.isRequired,
    createMember: PropTypes.func.isRequired
  }

  render () {
    const {members, projectId, createMember} = this.props
    return (
      <div>
        <MemberList members={members} projectId={projectId}/>
        <NewMember createMember={createMember} projectId={projectId}/>
      </div>
    )
  }
}
