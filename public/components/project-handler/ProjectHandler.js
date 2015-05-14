import React from 'react';
import Project from '../project/Project';
import FluxComponent from 'flummox/component';

let connectToStores = {
  project (store) {
    return {project: store.getProject()};
  }
};

export default class ProjectHandler extends React.Component {

  render () {
    return (
      <FluxComponent connectToStores={connectToStores}>
        <Project project={this.props.project}/>
      </FluxComponent>
    );
  }
}
