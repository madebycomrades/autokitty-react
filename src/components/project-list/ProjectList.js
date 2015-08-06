import React, {Component, PropTypes} from 'react'
import Link from '../link/Link'

export default class ProjectList extends Component {

  static propTypes = {
    projects: PropTypes.array.isRequired
  }

  render () {
    const {projects} = this.props
    return (
      <div>
        <p>Debug project list</p>
        <ul>
          {projects.map(project => {
            return (
              <li key={project._id}>
                <Link route='project' params={{projectId: project._id}}>{project.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
