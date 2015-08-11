import * as projectActions from '../../actions/projectActions'
import MemberContainer from '../member/MemberContainer'
import Project from '../../components/project/Project'
import ProjectOverview from '../../components/project-overview/ProjectOverview'
import React, {PropTypes} from 'react'
import {balancesMap} from '../../selectors'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

@connect(createSelector(
  [state => state.project, state => state.project.members, state => state.location, balancesMap],
  (project, members, location, balancesMap) => ({project, members, location, balancesMap})
))
export default class ProjectContainer {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    members: PropTypes.array.isRequired,
    project: PropTypes.object.isRequired,
    balancesMap: PropTypes.instanceOf(Map)
  }

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
    const {project, members, location, dispatch, balancesMap} = this.props
    const {_id: projectId} = project
    const {createMember} = bindActionCreators(projectActions, dispatch)
    if (location.name === 'project') {
      return <ProjectOverview balancesMap={balancesMap} members={members} createMember={createMember} projectId={projectId}/>
    } else {
      return <MemberContainer/>
    }
  }
}
