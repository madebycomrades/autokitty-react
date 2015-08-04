import React, {Component, PropTypes} from 'react';
import Link from '../link/Link';

export default class MemberList extends Component {

  static propTypes = {
    members: PropTypes.array,
    projectId: PropTypes.string
  };

  render () {
    const {members, projectId} = this.props;
    const NoMembers = <p>Your project has no members. Add some below...</p>;
    const TheList = (
      <ul>
        {members.map(member => {
          return (
            <li key={member.slug}>
              <Link route="member" params={{projectId, memberSlug: member.slug}}>{member.name}</Link>
            </li>
          );
        })}
      </ul>
    );
    return members.length > 0 ? TheList : NoMembers;
  }
}
