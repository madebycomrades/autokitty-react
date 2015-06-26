import React,{Component} from 'react';
import ProjectRecord from '../../records/ProjectRecord';

export default class ProjectHeader extends Component {

  static propTypes = {
    project: React.PropTypes.instanceOf(ProjectRecord)
  };

  render () {
    return (
      <div>
        <h2>{this.props.project.get('title')}</h2>
      </div>
    );
  }
}
