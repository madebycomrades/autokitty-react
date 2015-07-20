import React, {Component, PropTypes} from 'react';

export default class ProjectHeader extends Component {

  static propTypes = {
    project: PropTypes.object.isRequired
  };

  render () {
    return (
      <div>
        <h2>Project: {this.props.project.title}</h2>
      </div>
    );
  }
}
