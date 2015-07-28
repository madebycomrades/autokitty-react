import NewProject from '../../components/new-project/NewProject';
import ProjectList from '../../components/project-list/ProjectList';
import React, {Component, PropTypes} from 'react';

export default class Home extends Component {

  static propTypes = {
    projects: PropTypes.array.isRequired,
    createProject: PropTypes.func.isRequired
  };

  render () {
    const {projects,createProject} = this.props;
    return (
      <div>
        <NewProject createProject={createProject}/>
        <ProjectList projects={projects}/>
      </div>
    );
  }
}
