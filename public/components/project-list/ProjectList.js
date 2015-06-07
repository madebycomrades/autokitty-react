import React,{Component} from 'react';
import {Link} from 'react-router';
import {apiPath} from '../../utils';
import fetch from 'isomorphic-fetch';

let projectResourceUri = `${apiPath()}/project`;

export default class ProjectList extends Component {

  state = {projects: []};

  componentDidMount () {
    fetch(projectResourceUri)
      .then(response => response.json())
      .then(projects => this.setState({projects}));
  }

  render () {
    var projects = this.state.projects;
    return (
      <ul>
        {projects.map(project => {
          return (
            <li key={project._id}>
              <Link to="project" params={{projectId: project._id}}>{project.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
