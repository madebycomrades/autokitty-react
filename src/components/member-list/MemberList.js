import React, {Component, PropTypes} from 'react';
import MemberListItem from '../member-list-item/MemberListItem';

export default class MemberList extends Component {

  static propTypes = {
    deleteMember: PropTypes.func.isRequired
  };

  render () {
    return (
      <div>
        {this.props.project.members.map(member => {
          return (
            <div key={member.slug}>
              <MemberListItem
                deleteMember={this.props.deleteMember}
                projectId={this.props.project._id}
                member={member}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
