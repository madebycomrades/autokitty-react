import React from 'react';
import {bindActionCreators} from 'redux';
import {Connector} from 'react-redux';
import * as projectActions from '../actions/projectActions';
import Chrome from '../components/chrome/Chrome';
import ProjectList from '../components/project-list/ProjectList';
import NewProject from '../components/new-project/NewProject';

export default class AutoKittyApp {

  render () {
    return (
      <Connector select={state => ({projects:state.projects,location:state.location})}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild ({projects,location,dispatch}) {
    const actions = bindActionCreators(projectActions,dispatch);
    return (
      <Chrome>
        <NewProject addProject={actions.addProject}/>
        <ProjectList projects={projects}/>
      </Chrome>
    );
  }
}
