import React from 'react';
import ProjectHeader from '../../components/project-header/ProjectHeader';
import {connect} from 'react-redux';

@connect(state => ({
  project: state.project
}))
export default class ProjectContainer {

  render () {
    return <div>{this.renderChildren()}</div>;
  }

  renderChildren () {
    const {project} = this.props;
    return project._id ? <ProjectHeader project={project}/> : null;
  }
}
