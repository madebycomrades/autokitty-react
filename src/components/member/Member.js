import React, {Component, PropTypes} from 'react';
import Link from '../link/Link';

export default class Project extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
    projectId: PropTypes.string.isRequired,
    memberSlug: PropTypes.string.isRequired
  };

  render () {
    const {children, name, projectId, memberSlug} = this.props;
    return (
      <div>
        <h2><Link route="member" params={{projectId, memberSlug}}>{name}</Link></h2>
        {this.props.children}
      </div>
    );
  }
}
