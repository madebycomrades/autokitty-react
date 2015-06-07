import React,{Component} from 'react';
import ProjectRecord from '../../records/ProjectRecord';
import MemberList from '../member-list/MemberList';

export default class Project extends Component {

  static propTypes = {
    project: React.PropTypes.instanceOf(ProjectRecord)
  };

  render () {
    let members = this.props.project.get('members');
    return (
      <div>
        <h2>{this.props.project.get('title')}</h2>
        <MemberList members={members}/>
      </div>
    );
  }
}
