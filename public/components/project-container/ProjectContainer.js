import React,{Component} from 'react';
import Project from '../project/Project';
import FluxComponent from 'flummox/component';

export default class ProjectHandler extends Component {
  render () {
    return (
      <FluxComponent connectToStores={{
        project (store) {
          return {project: store.getProject()};
        }
      }}>
        <Project project={this.props.project}/>
      </FluxComponent>
    );
  }
}
