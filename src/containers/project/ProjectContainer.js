import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import {membersSelector} from '../../selectors'
import * as projectActions from '../../actions/projectActions'
import MemberContainer from '../member/MemberContainer'
import Project from '../../components/project/Project'
import ProjectOverview from '../../components/project-overview/ProjectOverview'
import React from 'react'

@connect(createSelector(
  [state => state.project, membersSelector, state => state.location],
  (project, members, location) => ({project, members, location})
))
export default class ProjectContainer {

  render () {
    const {project} = this.props
    const {_id: projectId} = project
    return typeof projectId !== 'undefined' ? this.renderProject() : <div></div>
  }

  renderProject () {
    const {project: {title, _id: projectId}} = this.props
    return (
      <Project title={title} projectId={projectId}>
        {this.renderProjectChildren()}
      </Project>
    )
  }

  renderProjectChildren () {
    const {project, members, location, dispatch} = this.props
    const {_id: projectId} = project
    const {createMember} = bindActionCreators(projectActions, dispatch)
    if (location.name === 'project') {
      return <ProjectOverview members={members} createMember={createMember} projectId={projectId}/>
    } else {
      return <MemberContainer/>
    }
  }
}
