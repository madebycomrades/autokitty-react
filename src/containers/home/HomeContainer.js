import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as projectActions from '../../actions/projectActions';
import NewProject from '../../components/new-project/NewProject';
import ProjectList from '../../components/project-list/ProjectList';
import React from 'react';

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
