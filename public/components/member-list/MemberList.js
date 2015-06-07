import React,{Component} from 'react';

export default class Members extends Component {
  render () {
    let members = this.props.members;
    return (
      <ul>
        {members.map(member => {
          return (
            <li key={member.slug}>
              {member.name}
            </li>
          );
        })}
      </ul>
    );
  }
}
