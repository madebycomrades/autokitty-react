import React from 'react';

export default class Project extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p>ID: {this.props.project.id}</p>
        <p>Project: {this.props.project.title}</p>
      </div>
    );
  }
};
