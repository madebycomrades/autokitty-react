import React from 'react';
import ProjectRecord from '../../records/ProjectRecord';

export default class Project extends React.Component {

  static propTypes = {
    project: React.PropTypes.instanceOf(ProjectRecord)
  };

  shouldComponentUpdate (nextProps) {
    return nextProps.project !== this.props.project;
  }

  render () {
    return (
      <div>
        <p>ID: {this.props.project.get('_id')}</p>
        <p>Project: {this.props.project.get('title')}</p>
      </div>
    );
  }
}
