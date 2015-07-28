import React, {Component, PropTypes} from 'react';
import Link from '../link/Link';

export default class Project extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    projectId: PropTypes.string.isRequired
  };

  render () {
    const {children, title, projectId} = this.props;
    return (
      <div>
        <h2><Link route="project" params={{projectId}}>{title}</Link></h2>
        {this.props.children}
      </div>
    );
  }
}
