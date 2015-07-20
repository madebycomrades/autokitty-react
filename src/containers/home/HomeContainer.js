import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import ProjectList from '../../components/project-list/ProjectList';
import NewProject from '../../components/new-project/NewProject';

@connect(state => ({
  projects: state.projects
}))
export default class HomeContainer {

  render () {
    const {dispatch, projects} = this.props;
    const {addProject} = bindActionCreators(projectActions, dispatch);
    return (
      <div>
        <NewProject addProject={addProject}/>
        <ProjectList projects={projects}/>
      </div>
    );
  }
}
