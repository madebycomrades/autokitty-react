import {Link} from 'react-router';
import MemberRecord from '../../records/MemberRecord';
import React,{Component,PropTypes} from 'react';

export default class MemberListItem extends Component {

  static propTypes = {
    member: PropTypes.instanceOf(MemberRecord),
    deleteMember: PropTypes.func.isRequired,
    projectId: PropTypes.string.isRequired
  };

  delete = () => {
    this.props.deleteMember(this.props.member.slug);
  };

  render () {
    const linkParams = {
      memberSlug: this.props.member.slug,
      projectId: this.props.projectId
    };
    return (
      <div>
        <Link to="member" params={linkParams}>{this.props.member.name}</Link> <a href="#" onClick={this.delete}>[X]</a>
      </div>
    );
  }
}
