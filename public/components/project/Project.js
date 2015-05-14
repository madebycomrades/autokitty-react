import React from 'react';

export default class Project extends React.Component {

  render () {
    return (
      <div>
        <p>ID: {this.props.project.get('_id')}</p>
        <p>Project: {this.props.project.get('title')}</p>
      </div>
    );
  }
}
