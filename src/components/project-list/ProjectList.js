import React, {Component} from 'react';
import Link from '../link/Link';

export default class ProjectList extends Component {

  render () {
    const {projects} = this.props;
    return (
      <ul>
        {projects.map(project => {
          return (
            <li key={project._id}>
              <Link route="project" params={{projectId: project._id}}>{project.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
