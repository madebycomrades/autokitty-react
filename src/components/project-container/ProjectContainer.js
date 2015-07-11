import React,{Component} from 'react';
import {RouteHandler} from 'react-router';
import ProjectHeader from '../project-header/ProjectHeader';
import FluxComponent from 'flummox/component';

const connectToStores = {
  project (store) {
    return {project: store.getProject()};
  }
};

export default class ProjectContainer extends Component {

  addMember = name => {
    console.log('addMember',name);
  };

  deleteMember = memberSlug => {
    this.props.flux
      .getActions('project')
      .deleteMember(this.props.params.projectId,memberSlug);
  };

  render () {
    return (
      <FluxComponent connectToStores={connectToStores}>
        <ProjectHeader/>
        <RouteHandler
          deleteMember={this.deleteMember}
          addMember={this.addMember}
        />
      </FluxComponent>
    );
  }
}
