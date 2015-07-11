import React,{Component} from 'react';

export default class ProjectList extends Component {

  render () {
    var projects = this.props.projects;
    return (
      <ul>
        {projects.map(project => {
          return <li key={project._id}>{project.title}</li>;
        })}
      </ul>
    );
  }
}
